import{graphql}from"gatsby";export const globalFragments=graphql`
  fragment HeaderNavItemFragment on NavItem {
    type
    label
    link
    icon
    target
    external
    activateWithSidebar
  }

  fragment HeaderNavFragment on Query {
    siteConfig {
      logo {
        altText
        image
        href
      }
      nav {
        ...HeaderNavItemFragment
        items {
          ...HeaderNavItemFragment
          items {
            ...HeaderNavItemFragment
          }
        }
      }
    }
  }

  fragment SidebarItemFragment on NavItem {
    label
    link
    httpVerb
    type
    expanded
    selectFirstItemOnExpand
    pageId
    redocPrevLink
    redocPrevLabel
    redocNextLink
    redocNextLabel
    redocFakePage
    external
    target
    menuStyle
    sublabel
    icon
    separatorLine
    apiVersionId
    isDefaultApiVersion
  }

  fragment SidebarFragment on NavItem {
    ...SidebarItemFragment
    items {
      ...SidebarItemFragment
      items {
        ...SidebarItemFragment
        items {
          ...SidebarItemFragment
          items {
            ...SidebarItemFragment
            items {
              ...SidebarItemFragment
              items {
                ...SidebarItemFragment
                items {
                  ...SidebarItemFragment
                }
              }
            }
          }
        }
      }
    }
  }

  fragment FooterFragment on Query {
    siteConfig {
      footer {
        copyrightText
        links {
          ...SidebarItemFragment
        }
        columns {
          label
          group
          items {
            ...SidebarItemFragment
          }
        }
      }
      siteVersion
    }
  }
`;