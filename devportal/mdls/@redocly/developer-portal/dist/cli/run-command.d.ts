export = runCommand;
/**
 * @typedef {{
 * p?: string | number;
 * H?: string;
 * o?: boolean;
 * port?: string | number;
 * host?: string;
 * open?: boolean;
 * 'prefix-paths'?: boolean;
 * prefixPaths?: boolean;
 * }} Argv
 */
/**
 *
 * @param {'build' | 'develop'} command
 * @param {Argv} argv
 */
declare function runCommand(command: 'build' | 'develop', argv: Argv): Promise<void>;
declare namespace runCommand {
    export { Argv };
}
type Argv = {
    p?: string | number;
    H?: string;
    o?: boolean;
    port?: string | number;
    host?: string;
    open?: boolean;
    'prefix-paths'?: boolean;
    prefixPaths?: boolean;
};
