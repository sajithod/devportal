import { Action, Event, EventObject, SingleOrArray, SendAction, SendActionOptions, CancelAction, ActionObject, ActionType, Assigner, PropertyAssigner, AssignAction, ActionFunction, ActionFunctionMap, ActivityActionObject, ActionTypes, ActivityDefinition, RaiseAction, RaiseActionObject, DoneEvent, ErrorPlatformEvent, DoneEventObject, SendExpr, SendActionObject, PureAction, LogExpr, LogAction, LogActionObject, DelayFunctionMap, SCXML, ExprWithMeta, ChooseCondition, ChooseAction, AnyEventObject, Expr, StopAction, StopActionObject, Cast, ActorRef, EventFrom } from './types';
import * as actionTypes from './actionTypes';
import { State } from './State';
import { StateNode } from './StateNode';
export { actionTypes };
export declare const initEvent: SCXML.Event<{
    type: ActionTypes;
}>;
export declare function getActionFunction<TContext, TEvent extends EventObject>(actionType: ActionType, actionFunctionMap?: ActionFunctionMap<TContext, TEvent>): ActionObject<TContext, TEvent> | ActionFunction<TContext, TEvent> | undefined;
export declare function toActionObject<TContext, TEvent extends EventObject>(action: Action<TContext, TEvent>, actionFunctionMap?: ActionFunctionMap<TContext, TEvent>): ActionObject<TContext, TEvent>;
export declare const toActionObjects: <TContext, TEvent extends EventObject>(action?: SingleOrArray<Action<TContext, TEvent>> | undefined, actionFunctionMap?: ActionFunctionMap<TContext, TEvent, import("./types").BaseActionObject> | undefined) => ActionObject<TContext, TEvent>[];
export declare function toActivityDefinition<TContext, TEvent extends EventObject>(action: string | ActivityDefinition<TContext, TEvent>): ActivityDefinition<TContext, TEvent>;
/**
 * Raises an event. This places the event in the internal event queue, so that
 * the event is immediately consumed by the machine in the current step.
 *
 * @param eventType The event to raise.
 */
export declare function raise<TContext, TEvent extends EventObject>(event: Event<TEvent>): RaiseAction<TEvent> | SendAction<TContext, AnyEventObject, TEvent>;
export declare function resolveRaise<TEvent extends EventObject>(action: RaiseAction<TEvent>): RaiseActionObject<TEvent>;
/**
 * Sends an event. This returns an action that will be read by an interpreter to
 * send the event in the next step, after the current step is finished executing.
 *
 * @param event The event to send.
 * @param options Options to pass into the send event:
 *  - `id` - The unique send event identifier (used with `cancel()`).
 *  - `delay` - The number of milliseconds to delay the sending of the event.
 *  - `to` - The target of this event (by default, the machine the event was sent from).
 */
export declare function send<TContext, TEvent extends EventObject, TSentEvent extends EventObject = AnyEventObject>(event: Event<TSentEvent> | SendExpr<TContext, TEvent, TSentEvent>, options?: SendActionOptions<TContext, TEvent>): SendAction<TContext, TEvent, TSentEvent>;
export declare function resolveSend<TContext, TEvent extends EventObject, TSentEvent extends EventObject>(action: SendAction<TContext, TEvent, TSentEvent>, ctx: TContext, _event: SCXML.Event<TEvent>, delaysMap?: DelayFunctionMap<TContext, TEvent>): SendActionObject<TContext, TEvent, TSentEvent>;
/**
 * Sends an event to this machine's parent.
 *
 * @param event The event to send to the parent machine.
 * @param options Options to pass into the send event.
 */
export declare function sendParent<TContext, TEvent extends EventObject, TSentEvent extends EventObject = AnyEventObject>(event: Event<TSentEvent> | SendExpr<TContext, TEvent, TSentEvent>, options?: SendActionOptions<TContext, TEvent>): SendAction<TContext, TEvent, TSentEvent>;
declare type InferEvent<E extends EventObject> = {
    [T in E['type']]: {
        type: T;
    } & Extract<E, {
        type: T;
    }>;
}[E['type']];
/**
 * Sends an event to an actor.
 *
 * @param actor The `ActorRef` to send the event to.
 * @param event The event to send, or an expression that evaluates to the event to send
 * @param options Send action options
 * @returns An XState send action object
 */
export declare function sendTo<TContext, TEvent extends EventObject, TActor extends ActorRef<EventObject>>(actor: (ctx: TContext) => TActor, event: EventFrom<TActor> | SendExpr<TContext, TEvent, InferEvent<Cast<EventFrom<TActor>, EventObject>>>, options?: SendActionOptions<TContext, TEvent>): SendAction<TContext, TEvent, any>;
/**
 * Sends an update event to this machine's parent.
 */
export declare function sendUpdate<TContext, TEvent extends EventObject>(): SendAction<TContext, TEvent, {
    type: ActionTypes.Update;
}>;
/**
 * Sends an event back to the sender of the original event.
 *
 * @param event The event to send back to the sender
 * @param options Options to pass into the send event
 */
export declare function respond<TContext, TEvent extends EventObject, TSentEvent extends EventObject = AnyEventObject>(event: Event<TEvent> | SendExpr<TContext, TEvent, TSentEvent>, options?: SendActionOptions<TContext, TEvent>): SendAction<TContext, TEvent, AnyEventObject>;
/**
 *
 * @param expr The expression function to evaluate which will be logged.
 *  Takes in 2 arguments:
 *  - `ctx` - the current state context
 *  - `event` - the event that caused this action to be executed.
 * @param label The label to give to the logged expression.
 */
export declare function log<TContext, TEvent extends EventObject>(expr?: string | LogExpr<TContext, TEvent>, label?: string): LogAction<TContext, TEvent>;
export declare const resolveLog: <TContext, TEvent extends EventObject>(action: LogAction<TContext, TEvent>, ctx: TContext, _event: SCXML.Event<TEvent>) => LogActionObject<TContext, TEvent>;
/**
 * Cancels an in-flight `send(...)` action. A canceled sent action will not
 * be executed, nor will its event be sent, unless it has already been sent
 * (e.g., if `cancel(...)` is called after the `send(...)` action's `delay`).
 *
 * @param sendId The `id` of the `send(...)` action to cancel.
 */
export declare const cancel: (sendId: string | number) => CancelAction;
/**
 * Starts an activity.
 *
 * @param activity The activity to start.
 */
export declare function start<TContext, TEvent extends EventObject>(activity: string | ActivityDefinition<TContext, TEvent>): ActivityActionObject<TContext, TEvent>;
/**
 * Stops an activity.
 *
 * @param actorRef The activity to stop.
 */
export declare function stop<TContext, TEvent extends EventObject>(actorRef: string | ActivityDefinition<TContext, TEvent> | Expr<TContext, TEvent, string | {
    id: string;
}>): StopAction<TContext, TEvent>;
export declare function resolveStop<TContext, TEvent extends EventObject>(action: StopAction<TContext, TEvent>, context: TContext, _event: SCXML.Event<TEvent>): StopActionObject;
/**
 * Updates the current context of the machine.
 *
 * @param assignment An object that represents the partial context to update.
 */
export declare const assign: <TContext, TEvent extends EventObject = EventObject>(assignment: Assigner<TContext, TEvent> | PropertyAssigner<TContext, TEvent>) => AssignAction<TContext, TEvent>;
export declare function isActionObject<TContext, TEvent extends EventObject>(action: Action<TContext, TEvent>): action is ActionObject<TContext, TEvent>;
/**
 * Returns an event type that represents an implicit event that
 * is sent after the specified `delay`.
 *
 * @param delayRef The delay in milliseconds
 * @param id The state node ID where this event is handled
 */
export declare function after(delayRef: number | string, id?: string): string;
/**
 * Returns an event that represents that a final state node
 * has been reached in the parent state node.
 *
 * @param id The final state node's parent state node `id`
 * @param data The data to pass into the event
 */
export declare function done(id: string, data?: any): DoneEventObject;
/**
 * Returns an event that represents that an invoked service has terminated.
 *
 * An invoked service is terminated when it has reached a top-level final state node,
 * but not when it is canceled.
 *
 * @param id The final state node ID
 * @param data The data to pass into the event
 */
export declare function doneInvoke(id: string, data?: any): DoneEvent;
export declare function error(id: string, data?: any): ErrorPlatformEvent & string;
export declare function pure<TContext, TEvent extends EventObject>(getActions: (context: TContext, event: TEvent) => SingleOrArray<ActionObject<TContext, TEvent>> | undefined): PureAction<TContext, TEvent>;
/**
 * Forwards (sends) an event to a specified service.
 *
 * @param target The target service to forward the event to.
 * @param options Options to pass into the send action creator.
 */
export declare function forwardTo<TContext, TEvent extends EventObject>(target: Required<SendActionOptions<TContext, TEvent>>['to'], options?: SendActionOptions<TContext, TEvent>): SendAction<TContext, TEvent, AnyEventObject>;
/**
 * Escalates an error by sending it as an event to this machine's parent.
 *
 * @param errorData The error data to send, or the expression function that
 * takes in the `context`, `event`, and `meta`, and returns the error data to send.
 * @param options Options to pass into the send action creator.
 */
export declare function escalate<TContext, TEvent extends EventObject, TErrorData = any>(errorData: TErrorData | ExprWithMeta<TContext, TEvent, TErrorData>, options?: SendActionOptions<TContext, TEvent>): SendAction<TContext, TEvent, AnyEventObject>;
export declare function choose<TContext, TEvent extends EventObject>(conds: Array<ChooseCondition<TContext, TEvent>>): ChooseAction<TContext, TEvent>;
export declare function resolveActions<TContext, TEvent extends EventObject>(machine: StateNode<TContext, any, TEvent, any, any, any>, currentState: State<TContext, TEvent> | undefined, currentContext: TContext, _event: SCXML.Event<TEvent>, actions: Array<ActionObject<TContext, TEvent>>, preserveActionOrder?: boolean): [Array<ActionObject<TContext, TEvent>>, TContext];
//# sourceMappingURL=actions.d.ts.map