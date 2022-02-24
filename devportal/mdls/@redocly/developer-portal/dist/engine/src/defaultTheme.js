import{lighten,readableColor,darken,transparentize}from"polished";import{theme as userTheme}from"Content/theme";const DEFAULT_ALERT_ICONS={warning:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 500.6 500.6" xml:space="preserve" enable-background="new 0 0 500.6 500.6"><path fill="#000" d="M250.3 15.1c-132.5 0-239.8 107.2-239.8 239.8 0 132.5 107.2 239.8 239.8 239.8 132.5 0 239.8-107.2 239.8-239.8C490.1 122.3 382.8 15.1 250.3 15.1zM250.3 457.1C138.5 457.1 48 366.7 48 254.8 48 143 138.5 52.5 250.3 52.5c111.8 0 202.3 90.5 202.3 202.3C452.6 366.7 362.1 457.1 250.3 457.1z"/><path fill="#000" d="M250.3 135.8c-10.3 0-18.7 8.4-18.7 18.7v120.6c0 10.3 8.4 18.7 18.7 18.7s18.7-8.4 18.7-18.7V154.5C269 144.2 260.7 135.8 250.3 135.8z"/><circle fill="#000" cx="250.3" cy="342.1" r="25.3"/></svg>`,success:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 500.6 500.6" xml:space="preserve" enable-background="new 0 0 500.6 500.6"><path fill="#000" d="M250.3 490.1c132.5 0 239.8-107.2 239.8-239.8 0-132.5-107.2-239.8-239.8-239.8 -132.5 0-239.8 107.2-239.8 239.8C10.6 382.8 117.8 490.1 250.3 490.1zM250.3 48c111.8 0 202.3 90.5 202.3 202.3 0 111.8-90.5 202.3-202.3 202.3C138.5 452.6 48 362.1 48 250.3 48 138.5 138.5 48 250.3 48z"/><path fill="#000" d="M224.7 349.6c8.5 5.9 20.2 3.8 26.1-4.6L355 195.7c5.9-8.5 3.8-20.2-4.6-26.1s-20.2-3.8-26.1 4.6L220 323.5C214.1 332 216.2 343.7 224.7 349.6z"/><path fill="#000" d="M247.1 346.2c7.3-7.3 7.3-19.2 0-26.5l-55.9-55.9c-7.3-7.3-19.2-7.3-26.5 0s-7.3 19.2 0 26.5l55.9 55.9C228 353.5 239.8 353.5 247.1 346.2z"/></svg>`,danger:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 500.6 500.6" xml:space="preserve" enable-background="new 0 0 500.6 500.6"><path fill="#000" d="M250.3 490.1c132.5 0 239.8-107.2 239.8-239.8 0-132.5-107.2-239.8-239.8-239.8 -132.5 0-239.8 107.2-239.8 239.8C10.6 382.8 117.8 490.1 250.3 490.1zM250.3 48c111.8 0 202.3 90.5 202.3 202.3 0 111.8-90.5 202.3-202.3 202.3C138.5 452.6 48 362.1 48 250.3 48 138.5 138.5 48 250.3 48z"/><path fill="#000" d="M168.4 332.2c7.3 7.3 19.2 7.3 26.5 0l137.3-137.3c7.3-7.3 7.3-19.2 0-26.5 -7.3-7.3-19.2-7.3-26.5 0L168.4 305.7C161.1 313 161.1 324.9 168.4 332.2z"/><path fill="#000" d="M168.4 168.4c-7.3 7.3-7.3 19.2 0 26.5l137.3 137.3c7.3 7.3 19.2 7.3 26.5 0 7.3-7.3 7.3-19.2 0-26.5L194.9 168.4C187.6 161.1 175.7 161.1 168.4 168.4z"/></svg>`,attention:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 500.6 500.6" xml:space="preserve" enable-background="new 0 0 500.6 500.6"><path fill="#000" d="M250.3 301.8c-8.3 0-15-6.7-15-15V181.9c0-8.3 6.7-15 15-15 8.3 0 15 6.7 15 15v104.9C265.3 295.1 258.6 301.8 250.3 301.8zM483.7 377L297.2 66.1c-21.2-35.3-72.6-35.4-93.8 0L16.9 377c-17.6 29.4 3.6 67.1 38 67.1h390.8C480.1 444.1 501.4 406.4 483.7 377L483.7 377zM445.7 414.1H54.9c-11.2 0-18-12.2-12.3-21.7L229.1 81.5c9.6-16 32.8-16 42.4 0L458 392.4C463.7 401.9 456.9 414.1 445.7 414.1z"/><circle fill="#000" cx="250.3" cy="339.2" r="22.5"/></svg>`,info:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0" y="0" viewBox="0 0 500.6 500.6" xml:space="preserve" enable-background="new 0 0 500.6 500.6"><path fill="#000" d="M250.3 490.7c132.5 0 239.8-107.2 239.8-239.8 0-132.5-107.2-239.8-239.8-239.8 -132.5 0-239.8 107.2-239.8 239.8C10.6 383.5 117.8 490.7 250.3 490.7zM250.3 48.6c111.8 0 202.3 90.5 202.3 202.3 0 111.8-90.5 202.3-202.3 202.3C138.5 453.2 48 362.7 48 250.9 48 139.1 138.5 48.6 250.3 48.6z"/><path fill="#000" d="M250.3 370c10.3 0 18.7-8.4 18.7-18.7V230.6c0-10.3-8.4-18.7-18.7-18.7 -10.3 0-18.7 8.4-18.7 18.7v120.6C231.6 361.6 240 370 250.3 370z"/><circle fill="#000" cx="250.3" cy="163.7" r="25.3"/></svg>`},DEFAULT_SEARCH_ICON=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 490 490" xml:space="preserve"><path fill="#000" d="M484 455.2L366.2 337.4c29.2-35.6 46.8-81.2 46.8-130.9C413 92.5 320.5 0 206.5 0 92.4 0 0 92.5 0 206.5S92.4 413 206.5 413c49.7 0 95.2-17.5 130.8-46.7L455.1 484c8 8 20.9 8 28.9 0C492 476.1 492 463.1 484 455.2zM206.5 371.9C115.2 371.9 41 297.7 41 206.5S115.2 41 206.5 41C297.7 41 372 115.3 372 206.5S297.7 371.9 206.5 371.9z"/></svg>`;export const defaultTheme={spacing:{unit:5,sectionHorizontal:({spacing:a})=>8*a.unit,sectionVertical:({spacing:a})=>8*a.unit},components:{buttons:{borderRadius:({shape:a})=>a.borderRadius,hoverStyle:"",fontWeight:({typography:a})=>a.fontWeightBold,boxShadow:"none",hoverBoxShadow:"0px 0px 12px 0px rgba(0, 0, 0, 0.1)",fontFamily:"inherit",sizes:{small:{fontSize:"12px",padding:"8px 10px",minWidth:"90px"},medium:{fontSize:"14px",padding:"8px 20px",minWidth:"120px"},large:{fontSize:"14px",padding:"12px 24px",minWidth:"150px"},xlarge:{fontSize:"16px",padding:"20px 24px",minWidth:"200px"}}},search:{icon:DEFAULT_SEARCH_ICON,iconColor:({colors:a})=>a.navbar.contrastText},alert:{marginHorizontal:"0",marginVertical:({spacing:a})=>`${2*a.unit}px`,paddingHorizontal:({spacing:a})=>`${4*a.unit}px`,paddingVertical:({spacing:a})=>`${4*a.unit}px`,borderRadius:"8px",iconSize:"25px",fontSize:"16px",fontWeight:"normal",lineHeight:"1.5",heading:{fontSize:"16px",fontWeight:"600",lineHeight:"1.5",letterSpacing:"0.3px",transform:"uppercase"},variants:{info:{backgroundColor:"#ebedf0",textColor:({colors:a})=>a.text.primary,headingColor:({colors:a})=>a.text.primary,iconColor:({colors:a})=>a.text.primary,icon:DEFAULT_ALERT_ICONS.attention},attention:{backgroundColor:({colors:a})=>a.info.light,textColor:({colors:a})=>a.info.contrastText,headingColor:({colors:a})=>a.info.contrastText,iconColor:({colors:a})=>a.info.main,icon:DEFAULT_ALERT_ICONS.attention},warning:{backgroundColor:({colors:a})=>a.warning.light,textColor:({colors:a})=>a.warning.contrastText,headingColor:({colors:a})=>a.warning.contrastText,iconColor:({colors:a})=>a.warning.main,icon:DEFAULT_ALERT_ICONS.warning},danger:{backgroundColor:({colors:a})=>a.error.light,textColor:({colors:a})=>a.error.contrastText,headingColor:({colors:a})=>a.error.contrastText,iconColor:({colors:a})=>a.error.main,icon:DEFAULT_ALERT_ICONS.danger},success:{backgroundColor:({colors:a})=>a.success.light,textColor:({colors:a})=>a.success.contrastText,headingColor:({colors:a})=>a.success.contrastText,iconColor:({colors:a})=>a.success.main,icon:DEFAULT_ALERT_ICONS.success}}},panels:{borderRadius:"8px"},shape:{borderRadius:"4px"},blockquote:{marginHorizontal:"0",marginVertical:"1.5em",paddingHorizontal:({spacing:a})=>`${4*a.unit}px`,paddingVertical:"0",backgroundColor:"transparent",borderRadius:"0",borderLeft:({colors:a})=>`4px solid ${a.border.light}`,color:({colors:a})=>a.text.primary},contentWrapper:{maxWidth:"910px",paddingHorizontal:"0",paddingVertical:"25px"},login:{avatarBorderRadius:({navbar:a})=>a.borderRadius,avatarBgColor:"rgb(80, 90, 111)"},layoutControls:{top:"90px"},httpBadges:{borderRadius:"16px",fontFamily:({typography:a})=>a.code.fontFamily,fontWeight:({typography:a})=>a.fontWeightBold,color:({colors:a})=>a.text.light,sizes:{medium:{fontSize:"12px",lineHeight:"20px"},small:{fontSize:"8px",lineHeight:"15px"}}},tryItButton:{fullWidth:!1},tryItSendButton:{fullWidth:!1}},breakpoints:{small:"550px",medium:"900px",large:"1200px"},shape:{borderRadius:"4px"},colors:{background:"#ffffff",tonalOffset:.2,primary:{main:"#0065FB",light:({colors:a})=>lighten(a.tonalOffset,a.primary.main),dark:({colors:a})=>darken(a.tonalOffset,a.primary.main),contrastText:({colors:a})=>readableColor(a.primary.main)},secondary:{main:"#E4E7EB",light:"#F5F7FA",dark:"#E4E7EB",contrastText:"#3E4C59"},accent:{main:"#59C3FF",light:"#b3dcf3",dark:"#033B73",contrastText:"#ffffff"},success:{main:"#00aa13",light:({colors:a})=>lighten(3*a.tonalOffset,a.success.main),dark:({colors:a})=>darken(a.tonalOffset,a.success.main),contrastText:({colors:a})=>readableColor(a.success.main)},error:{main:"#e53935",light:({colors:a})=>lighten(2*a.tonalOffset,a.error.main),dark:({colors:a})=>darken(a.tonalOffset,a.error.main),contrastText:({colors:a})=>readableColor(a.error.main)},warning:{main:"#d4ad03",light:({colors:a})=>lighten(2*a.tonalOffset,a.warning.main),dark:({colors:a})=>darken(a.tonalOffset,a.warning.main),contrastText:({colors:a})=>readableColor(a.warning.main)},info:{main:"#4782cb",light:({colors:a})=>lighten(2*a.tonalOffset,a.info.main),dark:({colors:a})=>darken(a.tonalOffset,a.info.main),contrastText:({colors:a})=>readableColor(a.info.main)},text:{primary:"#1F2933",secondary:"#7b8794",light:"#F5F7FA"},border:{dark:"#616E7C",light:"#E4E7EB"},responses:{success:{color:({colors:a})=>a.success.main,backgroundColor:({colors:a})=>transparentize(.9,a.success.main)},error:{color:({colors:a})=>a.error.main,backgroundColor:({colors:a})=>transparentize(.9,a.error.main)},redirect:{color:({colors:a})=>a.warning.main,backgroundColor:({colors:a})=>transparentize(.9,a.responses.redirect.color)},info:{color:({colors:a})=>a.info.main,backgroundColor:({colors:a})=>transparentize(.9,a.responses.info.color)}},http:{get:"#6bbd5b",post:"#248fb2",put:"#9b708b",options:"#d3ca12",patch:"#e09d43",delete:"#e27a7a",basic:"#999",link:"#31bbb6",head:"#c167e4"},navbar:{main:({colors:a})=>a.primary.main,gradient:({colors:a})=>darken(a.tonalOffset/2,a.navbar.main),contrastText:({colors:a})=>userTheme.colors&&userTheme.colors.navbar&&userTheme.colors.navbar.main&&readableColor(a.navbar.main)||a.primary.contrastText},footer:{main:({colors:a})=>a.primary.main,contrastText:({colors:a})=>userTheme.colors&&userTheme.colors.footer&&userTheme.colors.footer.main&&readableColor(a.footer.main)||a.primary.contrastText}},sidebar:{showAtBreakpoint:"medium",backgroundColor:"#fff",width:"320px",textColor:"#1F2933",textColorSecondary:"#3E4C59",activeTextColor:({sidebar:a})=>a.textColor,activeBgColor:"#E4E7EB",separatorLineColor:"#DADADA",rightLineColor:"#DADADA",separatorLabelColor:({sidebar:a})=>a.textColor,caretColor:({sidebar:a})=>a.textColorSecondary,caretSize:({sidebar:a})=>a.spacing.unit,spacing:{unit:8,paddingHorizontal:({sidebar:a})=>a.spacing.unit,paddingVertical:({sidebar:a})=>a.spacing.unit,offsetTop:({sidebar:a})=>2*a.spacing.unit,offsetLeft:({sidebar:a})=>2*a.spacing.unit,offsetNesting:({sidebar:a})=>2*a.spacing.unit},borderRadius:"4px",fontFamily:({typography:a})=>a.fontFamily,fontSize:({typography:a})=>a.fontSize},navbar:{borderRadius:"10px",marginHorizontal:"0px",marginVertical:"0px",activeTextColor:({colors:a})=>a.navbar.contrastText,activeBgColor:({colors:a})=>transparentize(.9,a.navbar.contrastText),activeTextDecoration:"none",fontWeight:600,fontSize:"16px"},tocPanel:{width:"240px"},logo:{maxWidth:"100%",maxHeight:"100%",height:"2rem",margin:"0"},typography:{fontSize:"14px",lineHeight:"1.5em",fontWeightRegular:"400",fontWeightBold:"600",fontWeightLight:"300",fontFamily:"\"Source Sans Pro\", sans-serif",headings:{fontFamily:"\"Source Sans Pro\", sans-serif",fontWeight:"600"},fieldName:{fontSize:({typography:a})=>a.code.fontSize,fontFamily:({typography:a})=>a.code.fontFamily,fontWeight:({typography:a})=>a.code.fontWeight},heading1:{fontSize:"36px",fontWeight:"600",fontFamily:({typography:a})=>a.headings.fontFamily,lineHeight:({typography:a})=>a.lineHeight,color:({colors:a})=>a.primary.main,capitalize:!0,marginTop:"1.35em",marginBottom:"0.9em"},heading2:{fontSize:"28px",fontWeight:"600",color:({colors:a})=>a.text.primary,fontFamily:({typography:a})=>a.headings.fontFamily,lineHeight:({typography:a})=>a.lineHeight,capitalize:!1,marginTop:"1.25em",marginBottom:"0.8em"},heading3:{fontSize:"1.27em",fontWeight:"600",color:({colors:a})=>a.text.primary,fontFamily:({typography:a})=>a.headings.fontFamily,lineHeight:({typography:a})=>a.lineHeight,capitalize:!1,marginTop:"1.25em",marginBottom:"0.8em"},heading4:{},heading5:{},heading6:{},rightPanelHeading:{},code:{fontSize:"14px",fontFamily:"\"Source Code Pro\", sans-serif",fontWeight:({typography:a})=>a.fontWeightRegular,color:"#e53935",backgroundColor:"rgba(38, 50, 56, 0.04)",wrap:!1},links:{color:({colors:a})=>a.primary.main,visited:({typography:a})=>a.links.color,hover:({typography:a})=>lighten(.2,a.links.color),textDecoration:"none"}},rightPanel:{showAtBreakpoint:"medium",backgroundColor:"#1F2933",width:"50%",textColor:"#ffffff",panelBackgroundColor:"#52606D",panelControlsBackgroundColor:"#323F4B"},schema:{linesColor:a=>a.colors.border.light,defaultDetailsWidth:"70%",typeNameColor:a=>a.colors.text.secondary,typeTitleColor:a=>a.schema.typeNameColor,requireLabelColor:"#FF0000",labelsTextSize:"0.9em",nestingSpacing:"1em",nestedBackground:a=>a.colors.secondary.light,caretColor:({colors:a})=>a.text.primary,caretSize:"9px"},codeBlock:{backgroundColor:({rightPanel:a})=>a.panelControlsBackgroundColor,copyButton:{visibleText:({codeBlock:a})=>transparentize(.4,readableColor(a.backgroundColor)),contrastText:({codeBlock:a})=>readableColor(a.backgroundColor),background:({codeBlock:a})=>transparentize(.85,readableColor(a.backgroundColor))},tokens:{}},layout:{showDarkRightPanel:!1,stacked:{maxWidth:{_:"90%",small:"90%",medium:"75%",large:"1200px"}},"three-panel":{maxWidth:{_:"100%",small:"100%",medium:"100%",large:"1800px"}}}};