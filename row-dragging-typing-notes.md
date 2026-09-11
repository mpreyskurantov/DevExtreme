# Row Dragging Typing Change Notes

Living review note for branch `26_2-RowDragging-T1322138`. Update the status markers and file list whenever the declaration sources are changed or consumers are regenerated.

## Demo Scope

Review and update only Angular, React, and Vue demos whose implementation is TypeScript: `.ts`, `.tsx`, and `<script lang="ts">` in `.vue` files. ReactJs and other JavaScript-only demo variants are intentionally out of scope. A framework folder is listed below only when one of its handler source files needs a row-dragging type change; entry points, templates, styles, and services are not listed merely because they belong to the same demo.

## Status Legend

- **Source**: manually maintained declaration or metadata input.
- **Generated**: regenerate from the declaration/metadata sources; avoid hand-editing.
- **Demo**: manually maintained consumer example.
- **OK**: reviewed against the current source declarations.
- **Recheck**: known issue or output that may be stale.
- **Decision**: intentional choice that should be reconsidered if the public API requirements change.

## Declaration Sources

### `packages/devextreme/js/core`

- **Source, OK** `packages/devextreme/js/core/index.d.ts`
  Extends `CheckedEvents` with `NestedEventProps` and the optional `TExcludedNestedEvents` constraint. DataGrid and TreeList use it to validate that the seven declared `rowDragging` override names are real nested event keys. This validates the structural names, but TypeScript cannot prove that a member was locally reconstructed rather than inherited.

### `packages/devextreme/js/common`

- **Source, OK** `packages/devextreme/js/common/grids.d.ts`
  Marks `DragDropInfo`, `DragReorderInfo`, `DragStartEventInfo`, and `RowDraggingEventInfo` with empty `@docid` and `@public`, and marks every direct member with an empty `@docid`. Their export names are consequently used directly in component event `@inherits` lists.

### `packages/devextreme/js/ui`

- **Source, OK** `packages/devextreme/js/ui/data_grid.d.ts`
  Reconstructs `dxDataGridOptions.rowDragging` and all seven callbacks with DataGrid-specific event aliases. The event aliases and reconstructed `RowDragging` alias are public, preserving `DataGridTypes.RowDragging` while providing the component-specific callback types.

- **Generated, OK** `packages/devextreme/js/ui/data_grid_types.d.ts`
  Exposes `RowDragging`, all seven row-dragging event aliases, and the four newly public shared info types.

- **Source, OK** `packages/devextreme/js/ui/tree_list.d.ts`
  Mirrors the DataGrid reconstruction with TreeList-specific event aliases and nested override checking. Its reconstructed `RowDragging` alias is public, preserving `TreeListTypes.RowDragging`.

- **Generated, Recheck** `packages/devextreme/js/ui/tree_list_types.d.ts`
  Exposes the restored public `RowDragging` alias. Its shared-info block currently adds only `DragDropInfo`, so regenerate after the final `@inherits` updates; expected additional exports are `DragReorderInfo`, `DragStartEventInfo`, and `RowDraggingEventInfo`.

### `packages/devextreme/ts`

- **Generated, Recheck** `packages/devextreme/ts/dx.all.d.ts`
  Contains the reconstructed public DataGrid and TreeList row-dragging types, public event descriptions, and public common event-info descriptions. Regenerate after any source JSDoc/type change.

## Metadata

### `packages/devextreme-metadata`

- **Source, OK** `packages/devextreme-metadata/make-angular-metadata.ts`
  Removes fake `dxDataGridOptions.rowDragging` and `dxTreeListOptions.rowDragging` members from Angular metadata to avoid duplicate nested-option metadata. Revisit the regex if another nested grid option begins using the same override mechanism.

## Angular Consumers

### `packages/devextreme-angular/src/common`

- **Generated, OK** `packages/devextreme-angular/src/common/grids/index.ts`
  Re-exports the four newly public shared row-dragging info types.

- **Generated, OK** `packages/devextreme-angular/src/common/index.ts`
  Adds the same four types to the `Grids` namespace, preserving generic parameters on `DragStartEventInfo` and `RowDraggingEventInfo`.

### `packages/devextreme-angular/src/ui`

- **Generated, OK** `packages/devextreme-angular/src/ui/data-grid/index.ts`
  Replaces expanded inline row-dragging callback payloads with the seven DataGrid event aliases for the option getter, setter, and change emitter.

- **Generated, OK** `packages/devextreme-angular/src/ui/data-grid/nested/row-dragging.ts`
  Uses the corresponding DataGrid event alias for each nested callback input.

- **Generated, OK** `packages/devextreme-angular/src/ui/tree-list/index.ts`
  Replaces expanded inline payloads with the seven TreeList event aliases.

- **Generated, OK** `packages/devextreme-angular/src/ui/tree-list/nested/row-dragging.ts`
  Uses the corresponding TreeList event alias for each nested callback input.

## React Consumers

### `packages/devextreme-react/src/common`

- **Generated, OK** `packages/devextreme-react/src/common/grids.ts`
  Re-exports the four public shared row-dragging info types.

- **Generated, OK** `packages/devextreme-react/src/common/index.ts`
  Adds the shared types to the `Grids` namespace.

### `packages/devextreme-react/src`

- **Generated, OK** `packages/devextreme-react/src/data-grid.ts`
  Types `RowDragging` nested component callbacks with DataGrid event aliases instead of expanded payload objects.

- **Generated, OK** `packages/devextreme-react/src/tree-list.ts`
  Types `RowDragging` nested component callbacks with TreeList event aliases.

## Vue Consumers

### `packages/devextreme-vue/src/common`

- **Generated, OK** `packages/devextreme-vue/src/common/grids.ts`
  Re-exports the four public shared row-dragging info types.

- **Generated, OK** `packages/devextreme-vue/src/common/index.ts`
  Adds the shared types to the `Grids` namespace.

### `packages/devextreme-vue/src`

- **Generated, OK** `packages/devextreme-vue/src/data-grid.ts`
  Uses DataGrid event aliases in all seven `DxRowDragging` callback prop types.

- **Generated, OK** `packages/devextreme-vue/src/tree-list.ts`
  Uses TreeList event aliases in all seven `DxRowDragging` callback prop types.

## Demo Consumers

### DataGrid: Drag and Drop Between Grids

- **Demo, OK** `apps/demos/Demos/DataGrid/DnDBetweenGrids/Angular/app/app.component.ts`
  Replaces the indexed `RowDragging['onAdd']` extraction with `DxDataGridTypes.RowDraggingAddEvent`. The handler matches `onAdd`. The Angular check still reports a pre-existing `DataSourceOptions` type-only import at line 4, unrelated to row dragging.

- **Demo, OK** `apps/demos/Demos/DataGrid/DnDBetweenGrids/React/Grid.tsx`
  Types `onAdd` with `DataGridTypes.RowDraggingAddEvent`. The handler matches the event and compiles in the React check.

- **Demo, OK** `apps/demos/Demos/DataGrid/DnDBetweenGrids/Vue/Grid.vue`
  Replaces `any` with `DxDataGridTypes.RowDraggingAddEvent`. The Vue type check passes.

### DataGrid: Local Reordering

- **Demo, OK** `apps/demos/Demos/DataGrid/LocalReordering/Vue/App.vue`
  Replaces `any` with `DxDataGridTypes.RowDraggingReorderEvent<Task>`. The generic preserves the demo's item shape for `itemData` and visible-row data; non-null assertions document that this reorder handler requires the dragged item supplied at runtime.

- **Demo, OK** `apps/demos/Demos/DataGrid/LocalReordering/React/App.tsx`
  Types `onReorder` with `DataGridTypes.RowDraggingReorderEvent`. Access to `component`, `toIndex`, `itemData`, and reorder payload data matches that event.

### DataGrid: Remote Reordering

- **Demo, OK** `apps/demos/Demos/DataGrid/RemoteReordering/Angular/app/app.component.ts`
  Types both `onReorder` and `processReorder` with `DxDataGridTypes.RowDraggingReorderEvent`. Assigning the returned `Promise<void>` to `e.promise` is valid.

- **Demo, OK** `apps/demos/Demos/DataGrid/RemoteReordering/React/App.tsx`
  Uses `DataGridTypes.RowDraggingReorderEvent` directly for `onReorder` and removes the former `IRowDraggingProps` compatibility cast.

- **Demo, OK** `apps/demos/Demos/DataGrid/RemoteReordering/Vue/App.vue`
  Types both `onReorder` and `processReorder` with `DxDataGridTypes.RowDraggingReorderEvent<Task>`.

### TreeList: Local Reordering

- **Demo, OK** `apps/demos/Demos/TreeList/LocalReordering/Angular/app/app.component.ts`
  Already used the correct change and reorder event aliases; its `DxTreeListTypes` and `Employee` imports are now explicitly type-only.

- ~~**Demo, Recheck** `apps/demos/Demos/TreeList/LocalReordering/React/App.tsx`: TypeScript reports that `targetNode.parent` may be `undefined`.~~

- **Demo, Resolved** `apps/demos/Demos/TreeList/LocalReordering/React/App.tsx`
  Correctly maps `onDragChange` to `TreeListTypes.RowDraggingChangeEvent` and `onReorder` to `TreeListTypes.RowDraggingReorderEvent`. `targetNode` is now explicitly typed as `TreeListTypes.Node | undefined`, matching the optional `parent` property. The React demo check no longer reports an error from this demo; only unrelated existing `Template` JSX errors remain.

- **Demo, OK** `apps/demos/Demos/TreeList/LocalReordering/Vue/App.vue`
  Replaces both `Record<string, any>` parameters with `DxTreeListTypes.RowDraggingChangeEvent` and `DxTreeListTypes.RowDraggingReorderEvent`. Its traversal node accepts `undefined` from the optional `parent` property.

## Regeneration Order

1. Update `common/grids.d.ts`, `core/index.d.ts`, and the component declaration sources.
2. Regenerate declaration metadata/types, including `data_grid_types.d.ts`, `tree_list_types.d.ts`, and `dx.all.d.ts`.
3. Regenerate Angular, React, and Vue component consumers.
4. Confirm only expected generated files changed, then review demos against the resulting public namespaces.

Do not manually normalize generated files unless the generator output itself is under investigation.

## Recheck Commands

These commands use already installed tools and do not invoke pnpm or modify dependencies.

```sh
git diff --check
git status --short
git diff --name-only -- packages apps/demos
```

React demos:

```sh
apps/demos/node_modules/.bin/tsc -p apps/demos/tsconfig.react-check.json --noEmit --pretty false
```

Known unrelated React failures currently involve `Template` being rejected as a JSX component. Any error in a modified row-dragging demo is actionable.

Angular demos:

```sh
apps/demos/node_modules/.bin/tsc -p apps/demos/tsconfig.ngc-check.json --noEmit --pretty false
```

This currently reports many unrelated repository errors. Filter attention to the modified demo paths and row-dragging aliases.

Vue demos:

```sh
apps/demos/node_modules/.bin/vue-tsc -p apps/demos/tsconfig.vue-check.json --noEmit --pretty false
```

This passed after the current Vue demo change.

## Current Follow-ups

- ~~Fix the TreeList React `targetNode` optionality error.~~ **Resolved:** `targetNode` now accepts `undefined` from the optional `parent` property.
- ~~Audit affected demo imports whose names end in `Types`.~~ **Resolved:** every affected `*Types` namespace now uses `import type` or an inline `type` import specifier.
- ~~Limit the demo audit to relevant implementations.~~ **Resolved:** only Angular `.ts`, React `.tsx`, and TypeScript Vue `.vue` handlers are in scope; ReactJs and JavaScript-only variants are excluded.
- ~~Type the eligible framework variants that were previously untouched.~~ **Resolved:** Local Reordering Vue, Remote Reordering React/Vue, and TreeList Local Reordering Angular/Vue are now covered. Vue passes; React has only the documented unrelated `Template` errors.
- Regenerate TreeList exports after the final `@inherits` updates.
- ~~Confirm whether component-specific `RowDragging` aliases should remain public.~~ **Resolved:** both aliases use `@public` as before and are exported by their sibling `_types.d.ts` files as `DataGridTypes.RowDragging` and `TreeListTypes.RowDragging`.
