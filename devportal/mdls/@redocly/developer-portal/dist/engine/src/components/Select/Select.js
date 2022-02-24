import*as React from"react";import{Dropdown,DropdownContent,DropdownTrigger}from"../Dropdown/Dropdown";import{Arrow}from"../Arrow/Arrow";import styled from"../../styled-components";const SelectWrapper=styled(Dropdown)`
  display: inline-block;
  position: relative;
`,SelectedValueLabel=styled.span`
  margin-right: 5px;
`,ItemToSelect=styled.div`
  font-weight: ${a=>a.selected?"bold":"normal"};
  cursor: pointer;
  padding: 10px 15px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,SelectedValue=styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;export class Select extends React.Component{constructor(a){super(a),this.selectItem=a=>{const{onChange:b}=this.props;this.dropdown.hide(),b&&b(a)},this.state={opened:!1}}render(){const{selectedValue:a,items:b,width:c,position:d}=this.props;return React.createElement(SelectWrapper,{className:this.props.className},React.createElement(Dropdown,{ref:a=>{this.dropdown=a}},React.createElement(DropdownTrigger,null,React.createElement(SelectedValue,null,React.createElement(SelectedValueLabel,null,this.getLabel(a)||this.props.placeholder),React.createElement(Arrow,null))),React.createElement(DropdownContent,{width:c,position:d},b.map(b=>React.createElement(ItemToSelect,{key:b.value,selected:b.value===a,onClick:this.selectItem.bind(this,b.value)},b.label)))))}getLabel(a){const b=this.props.items.filter(b=>b.value===a)[0];return b&&b.label}}