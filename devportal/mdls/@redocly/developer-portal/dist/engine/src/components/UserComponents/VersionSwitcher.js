import*as React from"react";import Select from"react-select";import styled from"../../styled-components";import{VersionSwitcherWrapper}from"./styled.elements";export default function VersionSwitcher(a){const b=React.useMemo(()=>a.apiVersions.map(a=>({label:a.title,value:a.id})),[a.apiVersions]),c=b.find(b=>b.value===a.apiVersionId);return React.createElement(VersionSwitcherWrapper,{"data-cy":`reference-docs-version-switcher`},React.createElement(StyledSelect,Object.assign({placeholder:"Select version",classNamePrefix:"react-select"},a,{options:b,value:c,onChange:a.onVersionChange})))}const StyledSelect=styled(Select)`
  .react-select {
    &__menu {
      margin-top: 0;
      z-index: 200;
    }
    &__option {
      &--is-selected,
      &--is-focused,
      &:hover {
        color: ${({theme:a})=>a.sidebar.textColor};
        background-color: ${({theme:a})=>a.sidebar.activeBgColor};
      }
    }
    &__control {
      min-height: 36px;
      border-radius: ${a=>a.theme.shape.borderRadius};
      &--is-focused {
        box-shadow: 0 0 0 1px ${({theme:a})=>a.colors.primary.main};
        border-color: ${({theme:a})=>a.colors.primary.main};
      }
    }
    &__indicator {
      svg {
        fill: #53565a;
      }
    }
    &__indicator-separator {
      display: none;
    }
  }

  input {
    caret-color: transparent;
  }
`;