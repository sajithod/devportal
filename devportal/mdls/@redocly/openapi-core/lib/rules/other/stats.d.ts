import { Oas3Parameter, OasRef, Oas3Tag } from '../../typings/openapi';
import { Oas2Parameter } from '../../typings/swagger';
import { StatsAccumulator } from '../../typings/common';
export declare const Stats: (statsAccumulator: StatsAccumulator) => {
    ExternalDocs: {
        leave(): void;
    };
    ref: {
        enter(ref: OasRef): void;
    };
    Tag: {
        leave(tag: Oas3Tag): void;
    };
    Link: {
        leave(link: any): void;
    };
    DefinitionRoot: {
        leave(): void;
    };
    WebhooksMap: {
        Operation: {
            leave(operation: any): void;
        };
    };
    PathMap: {
        PathItem: {
            leave(): void;
            Operation: {
                leave(operation: any): void;
            };
            Parameter: {
                leave(parameter: Oas2Parameter | Oas3Parameter): void;
            };
        };
    };
    NamedSchemas: {
        Schema: {
            leave(): void;
        };
    };
};
