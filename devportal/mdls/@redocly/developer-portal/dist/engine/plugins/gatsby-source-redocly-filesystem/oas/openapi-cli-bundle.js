const path=require("path"),chalk=require("chalk"),{existsSync}=require("fs"),isRelativeUrl=require("is-relative-url"),{formatProblems,bundle,lint,loadConfig,OasMajorVersion,openAPIMajor,Config,detectOpenAPI,getTotals,RedoclyClient}=require("@redocly/openapi-core"),{defaultPlugin}=require("@redocly/openapi-core/lib/config/builtIn"),{convertSwagger2OpenAPI}=require("@redocly/reference-docs"),REGISTRY_DEPENDENCIES_RULE="registry-dependencies",USE_IGNORE_MESSAGE="Generate a .redocly.lint-ignore.yaml file to ignore lint errors. npx @redocly/openapi-cli lint --generate-ignore-file.";module.exports=async(a,b,c)=>{const d=path.join(b,".redocly.yaml"),e=new RedoclyClient,f=existsSync(d)?await loadConfig(d,["minimal"]):new Config({lint:{extends:["minimal"],plugins:[defaultPlugin]},resolve:e.hasToken()?{http:{headers:[{matches:`https://api.${process.env.REDOCLY_DOMAIN||"redoc.ly"}/registry/**`,name:"Authorization",envVariable:void 0,value:(await e.getAuthorizationHeader())||""}]}}:void 0});f.lint.decorators.oas3_0[REGISTRY_DEPENDENCIES_RULE]="on",f.lint.decorators.oas2[REGISTRY_DEPENDENCIES_RULE]="on";let g=await bundleAndLint(a,b,c,f);return g?(openAPIMajor(detectOpenAPI(g))===OasMajorVersion.Version2&&(g=await convertSwagger2OpenAPI(g)),g):null};function outputMessages(a,b,c){formatProblems(a,{format:process.env.REDOCLY_LINT_OUTPUT_FORMAT||"stylish",maxProblems:20,cwd:c,totals:b}),console.log("")}async function bundleAndLint(a,b,c,d){const e=!!process.env.REDOCLY_OPENAPI_IGNORE_ERRORS,f=chalk.blue(isRelativeUrl(a)?path.relative(b,a):a),g=a.startsWith(`https://api.${process.env.REDOCLY_DOMAIN||"redoc.ly"}/registry/`);c.log(""),c.info(`${g?"Downloading":"Bundling and linting"}: ${f}`);let h,i;try{h=await bundle({ref:a,config:d}),i=getTotals(h.problems),0<i.errors?(e?c.warn(`Bundled definition with errors at ${f}.`):c.panicOnBuild(`Bundled definition with errors at ${f}.\n${USE_IGNORE_MESSAGE}`),outputMessages(h.problems,i,b)):c.info(`Successfully bundled definition at ${f}`)}catch(a){return c.panicOnBuild(a.message),null}if(g&&c.info(`Skip linting for definition from registry: ${f}`),!g&&0===i.errors){const g=await lint({ref:a,config:d}),i=getTotals([...g,...h.problems]),j=`${chalk.red(i.errors+" errors")} `+`${chalk.yellow(i.warnings+" warnings")} `+`${chalk.gray(i.ignored+" ignored")}`,k=`Lint ${f}: ${j}`;outputMessages(g,i,b),0<i.errors&&!e?c.panicOnBuild(`${k}\n`+chalk.red(`Definition has errors. ${USE_IGNORE_MESSAGE}`)):c.info(k)}return h.bundle?h.bundle.parsed:(c.error(`Unexpected error while bundling the definition at ${f}`),null)}