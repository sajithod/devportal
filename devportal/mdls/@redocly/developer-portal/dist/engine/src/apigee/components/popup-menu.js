import styled from"styled-components";export const PopupMenuUl=styled.ul`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 10px 30px 0px rgba(35, 35, 35, 0.1);
  min-width: 150px;
  padding: 0;
  padding-top: 0.25em;
  padding-bottom: 0.25em;
  margin: 0;
  li {
    list-style: none;
    padding: 0.5em;
    transition: background-color 0.25s ease;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      a,
      button {
        color: ${({theme:a})=>a.colors.primary.main};
      }
    }
  }
  a,
  button {
    display: inline-block;
    color: ${({theme:a})=>a.colors.text.primary};
    padding: 0.5em 1em;
    transition: color 0.25s ease;
    cursor: pointer;
    text-decoration: none;
    width: 100%;
    text-align: left;
  }
  button {
    background-color: transparent;
    outline: 0;
    border: 0;
  }
`;