import { matchesState } from './utils';
import { mapState } from './mapState';
import { StateNode } from './StateNode';
import { State } from './State';
import { Machine, createMachine } from './Machine';
import { Actor, toActorRef } from './Actor';
import * as actions from './actions';
import { interpret, Interpreter, spawn, InterpreterStatus } from './interpreter';
import { matchState } from './match';
import { createSchema, t } from './schema';
declare const assign: <TContext, TEvent extends import("./types").EventObject = import("./types").EventObject>(assignment: import("./types").Assigner<TContext, TEvent> | import("./types").PropertyAssigner<TContext, TEvent>) => import("./types").AssignAction<TContext, TEvent>, send: typeof actions.send, sendParent: typeof actions.sendParent, sendUpdate: typeof actions.sendUpdate, forwardTo: typeof actions.forwardTo, doneInvoke: typeof actions.doneInvoke;
export { Actor, toActorRef, Machine, StateNode, State, matchesState, mapState, actions, assign, send, sendParent, sendUpdate, forwardTo, interpret, Interpreter, InterpreterStatus, matchState, spawn, doneInvoke, createMachine, createSchema, t };
export * from './types';
export * from './typegenTypes';
declare global {
    interface SymbolConstructor {
        readonly observable: symbol;
    }
}
//# sourceMappingURL=index.d.ts.map