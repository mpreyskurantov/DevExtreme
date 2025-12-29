const BASE_PATH = 'http://localhost:5555';
// const BASE_PATH = 'https://js.devexpress.com/Demos/NetCore';

$(() => {
  const URL = `${BASE_PATH}/api/DataGridBatchUpdateWebApi`;

  $('#gridContainer').dxDataGrid({
    dataSource: DevExpress.data.AspNet.createStore({
      key: 'OrderID',
      loadUrl: `${URL}/Orders`,
      async onBeforeSend(__method, ajaxOptions) {
        const tokenData = await getAntiForgeryToken();
        ajaxOptions.xhrFields = {
          withCredentials: true,
          headers: { [tokenData.headerName]: tokenData.token },
        };
      },
    }),
    pager: {
      visible: true,
    },
    showBorders: true,
    editing: {
      mode: 'batch',
      allowAdding: true,
      allowUpdating: true,
      allowDeleting: true,
    },
    remoteOperations: true,
    repaintChangesOnly: true,
    onSaving(e) {
      e.cancel = true;

      if (e.changes.length) {
        const changes = normalizeChanges(e.changes);
        e.promise = getAntiForgeryToken()
          .then((tokenData) => sendBatchRequest(`${URL}/Batch`, changes, { [tokenData.headerName]: tokenData.token }))
          .then(() => e.component.refresh(true))
          .then(() => {
            e.component.cancelEditData();
          });
      }
    },
    columns: [{
      dataField: 'OrderID',
      allowEditing: false,
    }, {
      dataField: 'ShipName',
    }, {
      dataField: 'ShipCountry',
    }, {
      dataField: 'ShipCity',
    }, {
      dataField: 'ShipAddress',
    }, {
      dataField: 'OrderDate',
      dataType: 'date',
    }, {
      dataField: 'Freight',
    }],
  });

  function normalizeChanges(changes) {
    return changes.map((c) => {
      switch (c.type) {
        case 'insert':
          return {
            type: c.type,
            data: c.data,
          };
        case 'update':
          return {
            type: c.type,
            key: c.key,
            data: c.data,
          };
        case 'remove':
          return {
            type: c.type,
            key: c.key,
          };
        default:
          return c;
      }
    });
  }

  function getAntiForgeryToken() {
    return $.ajax({
      url: `${BASE_PATH}/api/Common/GetAntiForgeryToken`,
      method: 'GET',
      xhrFields: { withCredentials: true },
      cache: false,
    }).fail((xhr) => {
      const error = xhr.responseJSON?.message || xhr.statusText || 'Unknown error';
      throw new Error(`Failed to retrieve anti-forgery token: ${error}`);
    });
  }

  function sendBatchRequest(url, changes, headers) {
    const d = $.Deferred();

    $.ajax(url, {
      method: 'POST',
      data: JSON.stringify(changes),
      headers,
      cache: false,
      contentType: 'application/json',
      xhrFields: { withCredentials: true },
    }).done(d.resolve).fail((xhr) => {
      const errorMessage = xhr.responseJSON?.Message || xhr.statusText || 'Unknown error';
      d.reject(new Error(`Batch save failed: ${errorMessage}`));
    });

    return d.promise();
  }
});
