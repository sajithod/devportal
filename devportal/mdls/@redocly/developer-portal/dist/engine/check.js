const{createVerify}=require("crypto"),{red,blue}=require("chalk"),INVALID_KEY=red(`Invalid license key`),KEY_DOCS=`\n\nPlease, check out ${blue("https://docs.redoc.ly/api-reference-docs/on-premise/license-key/")} to learn more about the license key`,pkey=`-----BEGIN PUBLIC KEY-----
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMHjNir5fXx/ZXoaEeXQ5XyxbNJ4YJYczoCRdSkL6NLzw1FHnng5Vfcgk5+bvox9QRYRbuk84mA4f2NhywDbXKECAwEAAQ==
-----END PUBLIC KEY-----`;function exit(a,b=1){console.log(a),process.exit(b)}module.exports=function(a){let b=a||process.env.REDOCLY_LICENSE_KEY;return b?(parseAndVerifyKey(b),b):exit(INVALID_KEY+": missing key"+KEY_DOCS)};function atob(a){return Buffer.from(a,"base64").toString("utf-8")}function plural(a,b){return 1===b?a:a+"s"}function parseAndVerifyKey(a){let b;try{const[c,d]=a.split(".");b=atob(c);const e=createVerify("RSA-SHA256");if(e.update(b),e.end(),!e.verify(pkey,Buffer.from(d,"base64")))throw new Error("Invalid License Key")}catch(a){exit(INVALID_KEY+KEY_DOCS)}const c=JSON.parse(b);Date.now()/1e3>c.e&&exit(INVALID_KEY+": expired"+KEY_DOCS);const d=Math.ceil((c.e-Date.now()/1e3)/60/60/24);return c.t?console.log(`Trial: expires in ${blue(d.toString())} ${plural("day",d.toString())}\n`):c.e&&console.log("License key: valid until "+new Date(1e3*c.e).toDateString()+` (${blue(d.toString())} ${plural("day",d)})`),c.s&&-1!==c.s.split(",").indexOf("portal")||exit(INVALID_KEY+": no \"portal\" scope"),Array.isArray(c.h)&&console.log("Allowed hosts: "+blue(c.h.join(", "))),c}