# @salt-ds/ag-grid-theme

## 1.3.2

### Patch Changes

- d5fba9c0: Fixes alignment of input text in floating filter
- d0d7db8d: Fixes

  - Status bar value font weight and color
  - Status bar font size
  - Cell range selection improvements
  - Alignment of custom filters in floating filter
  - Scrollbar showing in header cells on wrap
  - Indentation on row groups

## 1.3.1

### Patch Changes

- 7e3a6053: Fixed bugs:

  - Filter icon incorrect color in HD compact theme
  - Vertical alignment of cells
  - Column group cell
  - Alignment of header cell separators with column group cell separators
  - Status bar style enhancements
  - Clipping of sort arrow in header row
  - New floating filter design
  - Pinned right columns styling

- 0d0bdeb4: Fixed invalid CSS being generated for heights
- 0d0bdeb4: Removed extra CSS from the theme.
- 402e13f7: Browser compatibility CSS changes.

  Added missing prefix to `appearance` and revert `padding-inline`, `padding-block` and `margin-block` to improve browser compatibility with Chrome 79

## 1.3.0

### Minor Changes

- 6cc395d0: Use Salt icons in Salt ag-grid theme
- ce2b6d4c: Add color-scheme to Salt AG grid theme to ensure native light and dark mode

### Patch Changes

- c2348ac2: Reduced spacing in context menu styles
- a453cec8: Fixed status bar and floating filter styles

  Added HD compact density styling

- dcd83052: Fixed column separator height and floating filter height

## 1.2.0

### Minor Changes

- 1013b554: Fix button styles in ag grid theme currently showing default HTML buttons by adding salt styles to `.ag-standard-button`.

## 1.1.6

### Patch Changes

- 4bd87710: Fix cell text not truncating in salt ag-grid-theme

## 1.1.5

### Patch Changes

- 123daf60: Fix inconsistent uitk ag-grid theme menu padding across densities

## 1.1.4

### Patch Changes

- f0f5f8e3: Update the icon font
- 1e9ef1a2: Fix duplicate Salt libraries being installed when multiple libraries are installed

## 1.1.3

### Patch Changes

- fb92ab4b: Update the icon mappings
- 09cc1177: Fix broken reference to font

## 1.1.2

### Patch Changes

- 0c478a6b: Fix fonts not being published in the ag-grid-theme

## 1.1.1

### Patch Changes

- 50370dec: Fixed some icons that were overridden incorrectly
- 982da8e2: Fix ag-grid uitk theme floating filter input height in High density

## 1.1.0

### Minor Changes

- f13b23b7: Add two new cell class names in salt ag-grid theme. These can be used instead of `.editable-numeric-cell`

  - `.numeric-cell` used on static cells that contain numeric values
  - `.editable-cell` used on editable cells

### Patch Changes

- 1acc0b03: Fix header focus outline in salt and uitk ag-grid themes
- 4cca8720: Fixed selected row's border color on row hover in salt ag-grid theme.

## 1.0.0

### Major Changes

- c1bc7479: Salt is the J.P. Morgan design system, an open-source solution for building exceptional products and digital experiences in financial services and other industries. It offers you well-documented, accessible components as well as comprehensive design templates, style libraries and assets.

  With this initial release we're providing:

  - AG Grid Theme
  - Border Layout
  - Button
  - Data Grid
  - Flex Layout
  - Flow Layout
  - Grid Layout
  - Icon
  - Link
  - Salt Provider
  - Stack Layout
  - Status Indicator
  - Text
  - Theme

  And a number of other lab components.
