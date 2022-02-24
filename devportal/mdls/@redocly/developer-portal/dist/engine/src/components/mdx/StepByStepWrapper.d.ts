import * as React from 'react';
export declare const RedocStepByStepContext: React.Context<{
    operationsResults: {};
    updateOperationResult: (stepId: string, operationData: any) => void;
}>;
export interface StepByStepWrapperProps {
    children: React.ReactNode;
    initialOperationsResults?: Record<string, any>;
}
declare const StepByStepWrapper: React.FC<StepByStepWrapperProps>;
export default StepByStepWrapper;
