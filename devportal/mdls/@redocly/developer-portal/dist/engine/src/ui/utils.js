export function usePathPrefix(){return process.env.REDOCLY_PREFIX_PATHS?normalizePathPrefix(process.env.REDOCLY_PREFIX_PATHS):""}export function normalizePathPrefix(a){return addLeadingSlash(removeTrailingSlash(a))}export function removeTrailingSlash(a){return a.endsWith("/")?a.substring(0,a.length-1):a}export function addLeadingSlash(a){return a.startsWith("/")?a:`/${a}`}export function removeLeadingSlash(a){return a.startsWith("/")?a.slice(1):a}export function addTrailingSlash(a){return a.endsWith("/")?a:a+"/"}export*from"../layouts/PageDataContext";