import*as React from"react";import{asField}from"informed";import{Dropdown}from"../../redoc-lib";import{useMount}from"../../hooks";var ParameterEnumDropdownComponent=function(e){var o=e.initValue,r=e.paramEnum,n=e.fieldApi,t=React.useState(o),a=t[0],u=t[1],i=r.map((function(e,o){return{id:String(o),value:e}}));return useMount((function(){o&&n.setValue(o)})),React.createElement(Dropdown,{fullWidth:!0,variant:"dark",value:a,options:i,onChange:function(e){n.setValue(e.value),u(e.value)}})};export var ParameterEnumDropdown=asField(ParameterEnumDropdownComponent);
//# sourceMappingURL=ParameterDropdown.js.map