/**
 * Convenience class to use as a binary carrier.
 *
 * Any valid Object with a field named `buffer` may be used as a binary carrier;
 * this class is only one such type of object that can be used.
 */
export default class BinaryCarrier {
    buffer: ArrayLike<number>;
    constructor(buffer: ArrayLike<number>);
}
//# sourceMappingURL=binary_carrier.d.ts.map