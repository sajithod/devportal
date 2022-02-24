import{typography}from"../../common-elements";import{svgToDataUri}from"../../appTheme";import{css}from"@redocly/reference-docs";export function getAlertVariant(a,b="info"){return a[b||"info"]}export function getAlertIcon(a,b){const c=getAlertVariant(a.components.alert.variants,b);return svgToDataUri(c.icon,c.iconColor)}export const alertGeneral=({theme:{components:b,colors:c},variant:a})=>css`
  position: relative;
  align-items: center;
  margin: ${b.alert.marginVertical} ${b.alert.marginHorizontal};
  padding: ${b.alert.paddingVertical} ${b.alert.paddingHorizontal};
  padding-left: calc(${b.alert.paddingHorizontal} * 2 + ${b.alert.iconSize});
  border-radius: ${b.alert.borderRadius};
  color: ${c.text.primary}; /* default color */

  background-color: ${getAlertVariant(b.alert.variants,a).backgroundColor};

  ${typography(b.alert)}
`;export const alertHeading=({theme:{components:b},variant:a})=>css`
  display: block;
  margin: 0;
  padding: 0;

  letter-spacing: ${b.alert.heading.letterSpacing};
  color: ${getAlertVariant(b.alert.variants,a).headingColor};
  ${typography(b.alert.heading)}
`;export const alertIcon=({theme:a,variant:b})=>`
  content: '';
  position: absolute;
  left: ${a.components.alert.paddingHorizontal};
  top:  50%;
  transform: translateY(-50%);

  width: ${a.components.alert.iconSize};
  height: ${a.components.alert.iconSize};
  margin-right: ${a.components.alert.paddingHorizontal};
  flex-shrink: 0;
  path {
    fill: ${getAlertVariant(a.components.alert.variants,b).iconColor};
  }

  background-image: url('${getAlertIcon(a,b)}');
`;