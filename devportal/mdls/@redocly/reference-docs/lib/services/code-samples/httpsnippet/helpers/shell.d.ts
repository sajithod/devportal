declare const _default: {
    /**
     * Use 'strong quoting' using single quotes so that we only need
     * to deal with nested single quote characters.
     * http://wiki.bash-hackers.org/syntax/quoting#strong_quoting
     */
    quote: (value: string) => string;
    escape: (value: string) => string;
};
export default _default;
