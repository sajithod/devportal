export const overrideParamsValues=(a,b)=>{a.forEach(a=>{const c=b[a.in]?.[a.name];a.schema.default=c})};export const overrideServerVariables=(a,b)=>{let c=[];for(let d=0;d<a.length;d++){const e=a[d].variables;if(!e){c[d]=a[d];continue}const f={};Object.keys(e).forEach(a=>{b.hasOwnProperty(a)&&(f[a]=getServerOverrideValue(b[a]))}),c[d]={...a[d],variables:{...a[d].variables,...f}}}return c};const getServerOverrideValue=a=>"string"==typeof a?{default:a}:{default:a.default,enum:a.enum};