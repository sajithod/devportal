import{lighten,readableColor,darken}from"polished";export const theme={spacing:{unit:5,sectionHorizontal:({spacing:a})=>8*a.unit,sectionVertical:({spacing:a})=>8*a.unit},navbar:{fontSize:"16px"},sidebar:{spacing:{},topOffset:26,leftOffset:30},breakpoints:{small:"550px",medium:"900px",large:"1200px"},colors:{background:"#F3F4F5",navbar:{gradient:({colors:a})=>darken(.1,a.navbar.main)},primary:{main:"Aloha"===process.env.WELCOME_MESSAGE?"red":"#0044d4",contrastText:({colors:a})=>readableColor(a.primary.main)},text:{},http:{get:"#6bbd5b",post:"#248fb2",put:"#9b708b",options:"#d3ca12",patch:"#e09d43",delete:"#e27a7a",basic:"#999",link:"#31bbb6",head:"#c167e4"}},typography:{fontSize:"14px",lineHeight:"1.5em",fontWeightRegular:"400",fontWeightBold:"600",fontWeightLight:"300",fontFamily:"Source Sans Pro, sans-serif",headings:{fontFamily:"Source Sans Pro, sans-serif",fontWeight:"600"},rightPanelHeading:{},code:{fontSize:"14px",fontFamily:"Courier, monospace",fontWeight:({typography:a})=>a.fontWeightRegular,color:"#e53935",backgroundColor:"rgba(38, 50, 56, 0.04)",wrap:!1},links:{color:({colors:a})=>a.primary.main,visited:({typography:a})=>a.links.color,hover:({typography:a})=>lighten(.2,a.links.color)}},rightPanel:{backgroundColor:"#263238",width:"50%"},schema:{nestedBackground:"#fafafa"}};