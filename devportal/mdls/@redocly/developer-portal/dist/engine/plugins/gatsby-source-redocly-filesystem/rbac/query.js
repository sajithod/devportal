module.exports=async function(a){const{data:b,errors:c}=await a(`
      # permission field is only for RBAC
      fragment HeaderNavItemFragment on NavItem {
        type
        label
        link
        icon
        target
        external
        activateWithSidebar
        permission
      }

      query S($ignoreRBAC: Boolean) {
        sidebars: allSidebar {
          nodes {
            name
            permission
            context
            items(ignoreRBAC: $ignoreRBAC) {
              ...SidebarFragment
            }
          }
        }
        siteConfig {
          nav(ignoreRBAC: $ignoreRBAC) {
            ...HeaderNavItemFragment
            items(ignoreRBAC: $ignoreRBAC) {
              ...HeaderNavItemFragment
              items(ignoreRBAC: $ignoreRBAC) {
                ...HeaderNavItemFragment
              }
            }
          }
          footer {
            copyrightText
            columns(ignoreRBAC: $ignoreRBAC) {
              permission
              group
              items(ignoreRBAC: $ignoreRBAC) {
                ...SidebarItemFragment
              }
            }
          }
        }
        apis(ignoreRBAC: $ignoreRBAC) {
          id
          definitionId
          link
          sourcePath
          info
          data
          definitionProperties
          permission
        }
        pages: allContentItem {
          nodes {
            link
            permission
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
        activateWithSidebar
        menuStyle
        icon
        sublabel
        permission
        separatorLine
        apiVersionId
        isDefaultApiVersion
      }

      fragment SidebarFragment on NavItem {
        ...SidebarItemFragment
        items(ignoreRBAC: $ignoreRBAC) {
          ...SidebarItemFragment
          items(ignoreRBAC: $ignoreRBAC) {
            ...SidebarItemFragment
            items(ignoreRBAC: $ignoreRBAC) {
              ...SidebarItemFragment
              items(ignoreRBAC: $ignoreRBAC) {
                ...SidebarItemFragment
                items(ignoreRBAC: $ignoreRBAC) {
                  ...SidebarItemFragment
                  items(ignoreRBAC: $ignoreRBAC) {
                    ...SidebarItemFragment
                    items(ignoreRBAC: $ignoreRBAC) {
                      ...SidebarItemFragment
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,{ignoreRBAC:!0});return console.log(c),c&&process.exit(1),b};