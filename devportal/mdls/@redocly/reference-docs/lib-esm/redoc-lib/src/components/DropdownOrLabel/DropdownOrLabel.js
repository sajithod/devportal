import{__assign}from"tslib";import*as React from"react";import{MimeLabel,SimpleDropdown}from"../../common-elements/dropdown";export function DropdownOrLabel(e){var o=e.Label,r=void 0===o?MimeLabel:o,t=e.Dropdown,n=void 0===t?SimpleDropdown:t;return 1===e.options.length?React.createElement(r,null,e.options[0].value):React.createElement(n,__assign({},e,{searchable:!1}))}
//# sourceMappingURL=DropdownOrLabel.js.map