import*as React from"react";export const RedocStepByStepContext=React.createContext({operationsResults:{},updateOperationResult:()=>{}});const StepByStepWrapper=({children:a,initialOperationsResults:b={}})=>{const[c,d]=React.useState(b);return React.createElement(RedocStepByStepContext.Provider,{value:{operationsResults:c,updateOperationResult:(a,b)=>d(c=>({...c,[a]:b}))}},a)};export default StepByStepWrapper;