const SEO_FRONTMATTER_KEYS=["title","lang","description","keywords","image","sitemap","jsonLd"];exports.remapMetaToSeoData=(a,b=null)=>{const c={...a};c.seo||(c.seo={});const d=Object.keys(c),e=d.some(a=>-1!==SEO_FRONTMATTER_KEYS.indexOf(a));return b&&e&&console.warn(`${b}:`),d.forEach(a=>{SEO_FRONTMATTER_KEYS.includes(a)&&(c.seo={...{[a]:c[a]},...c.seo},console.warn(`  "${a}" is deprecated in frontmatter, please move it under "seo"`),delete c[a])}),c};