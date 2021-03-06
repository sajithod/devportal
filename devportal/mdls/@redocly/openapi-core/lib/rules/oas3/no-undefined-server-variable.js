"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoUndefinedServerVariable = void 0;
const NoUndefinedServerVariable = () => {
    return {
        Server(server, { report, location }) {
            var _a;
            const urlVariables = ((_a = server.url.match(/{[^}]+}/g)) === null || _a === void 0 ? void 0 : _a.map((e) => e.slice(1, e.length - 1))) || [];
            const definedVariables = ((server === null || server === void 0 ? void 0 : server.variables) && Object.keys(server.variables)) || [];
            for (const serverVar of urlVariables) {
                if (!definedVariables.includes(serverVar)) {
                    report({
                        message: `The \`${serverVar}\` variable is not defined in the \`variables\` objects.`,
                        location: location.child(['url']),
                    });
                }
            }
            for (const definedServerVar of definedVariables) {
                if (!urlVariables.includes(definedServerVar)) {
                    report({
                        message: `The \`${definedServerVar}\` variable is not used in the server's \`url\` field.`,
                        location: location.child(['variables', definedServerVar]).key(),
                        from: location.child('url'),
                    });
                }
            }
        },
    };
};
exports.NoUndefinedServerVariable = NoUndefinedServerVariable;
