export function joinWithSeparator(a="",b="",c="/"){return a.endsWith(c)&&(a=a.slice(0,-c.length)),b.startsWith(c)&&(b=b.slice(c.length)),a&&b?a+c+b:a+b}export function formatStubJwt(a){return`stub-jwt-header.${btoa(JSON.stringify(a))}.stub-jwt-sign`}