#!/usr/bin/env node
const path=require("path"),yargs=require("yargs"),fs=require("fs-extra"),chalk=require("chalk"),isUrl=require("is-url"),runCommand=require("./cli/run-command"),reporter=require("./cli/reporter"),{ENGINES_DIR}=require("./cli/utils"),{copyStaticDirs,copyReferenceDocsOAuth2Redirect}=require("./engine/utils/staticFolder"),defaultHost="localhost";process.env.FORCE_COLOR="1",process.env.GATSBY_TELEMETRY_DISABLED="1",yargs.command("develop","Start Redocly Portal development server. Watches files and hot reloads",a=>a.option("H",{alias:"host",type:"string",default:defaultHost,describe:`Set host. Defaults to ${defaultHost}`}).option("p",{alias:"port",type:"string",default:"8000",describe:"Set port. Defaults to 8000"}).option("with-images-optimization",{type:"boolean",describe:"Enable image optimization in the development server"}).option("openapi-problems-format",{type:"string",default:"stylish",describe:"Use a specific output format for openapi lint problems: stylish or codeframe."}).option("o",{alias:"open",type:"boolean",describe:"Open the site in your browser for you."}),a=>{a["with-images-optimization"]||(process.env.REDOCLY_DISABLE_IMAGES_OPTIMIZATION="true",reporter.info("Images optimization disabled in dev mode, use --with-images-optimization to enable")),a["openapi-problems-format"]&&(process.env.REDOCLY_LINT_OUTPUT_FORMAT=a["openapi-problems-format"]),runCommand("develop",a)}).command("build","Build portal",a=>a.option("prefix-paths",{type:"string",default:"",describe:"Build site with link paths prefixed."}).option("prefix-assets",{type:"string",default:"",describe:"Load assets from external URL (experimental)"}).option("openapi-problems-format",{type:"string",default:"stylish",describe:"Use a specific output format for openapi lint problems: stylish or codeframe."}).option("ignore-openapi-errors",{type:"boolean",default:!1,describe:"Ignore OpenAPI validation errors and try to build portal anyways."}),async a=>{if(fs.emptyDirSync("public"),reporter.success("empty public dir"),reporter.info("starting Redocly Portal build"),a["prefix-paths"]&&(process.env.REDOCLY_PREFIX_PATHS=a["prefix-paths"]),a["prefix-assets"]){const b=a["prefix-assets"];isUrl(b)?process.env.REDOCLY_PREFIX_ASSETS=b.replace(/\/$/,""):reporter.warn(`The ${chalk.yellow("--prefix-assets")} argument is not valid url, will be ignored.`)}a["relative-paths"]&&(process.env.REDOCLY_PREFIX_PATHS="__REDOCLY_PATH_PREFIX__",process.env.REDOCLY_RELATIVE_PATHS="true",reporter.info(`${chalk.yellow("[experimental]")} Building with relative paths`)),a["ignore-openapi-errors"]&&(process.env.REDOCLY_OPENAPI_IGNORE_ERRORS="1",reporter.warn("Redocly Portal will ignore any OpenAPI validation errors. This may result in a broken build.")),a["openapi-problems-format"]&&(process.env.REDOCLY_LINT_OUTPUT_FORMAT=a["openapi-problems-format"]);try{const b=process.cwd(),c=!!(process.env.REDOCLY_PREFIX_PATHS||process.env.REDOCLY_RELATIVE_PATHS||process.env.REDOCLY_PREFIX_ASSETS)||void 0;await runCommand("build",{...a,prefixPaths:c,"prefix-paths":c}),copyReferenceDocsOAuth2Redirect(),await copyStaticDirs(),process.chdir(b),fs.copySync(`${path.resolve(__dirname,ENGINES_DIR)}/public`,"public",{overwrite:!0}),reporter.success(`copy build artifacts to ${chalk.blue("public")} folder`),reporter.success("All done"),process.exit(0)}catch(a){reporter.error("Redocly Portal build failed"),process.exit(a.status||1)}}).command("clean","Clean cache",a=>a,()=>{const a=path.join(__dirname,"engine",".cache"),b=path.join(__dirname,"engine","public");fs.remove(a,a=>{a&&(console.error(a),process.exit(1)),fs.remove(b,a=>{a&&(console.error(a),process.exit(1)),reporter.info("Cache cleaned successfully")})})}).argv;