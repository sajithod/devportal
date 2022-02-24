const visit=require("unist-util-visit"),qs=require("query-string");module.exports=function({markdownAST:a},b){!1===b.enable||visit(a,"html",a=>{const[c,d]=(a.lang||"").split(":"),e=qs.parse(d),{clipboard:f}=e;c&&"mermaid"!==c&&"false"!==f&&a.initialValue&&wrapNodeWithButton(a,b)})};function wrapNodeWithButton(a,{buttonText:b,tooltipText:c,toasterText:d,toasterDuration:e}){const f=(c||"Copy the code snippet").trim(),g=(d?d:"Copied").trim(),h=e?e:1500,i=g?Math.random()*100000000000000000000:"",j=a.initialValue.replace(/"/gm,"&quot;").replace(/`/gm,"\\`").replace(/\$/gm,"\\$"),k=a.value;a.value=`
      <div class="code-wrapper">
        <div class="gatsby-code-button-container"
             data-toaster-id="${i}"
             data-toaster-duration="${h}"
             onClick="copyCodeToClipboard(\`${j}\`, \`${i}\`)"
        >
          <div class="gatsby-code-button" title="${f}">${b||"Copy"}</div>
          <div class="done-indicator done-indicator-${i}">${g}</div>
        </div>
        ${k}
      </div>
    `.trim()}