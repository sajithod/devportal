/// <reference types="react" />
interface ServerVariableProps {
    onChange: (value: string) => void;
    name: string;
    value: string;
    variableEnum?: string[];
    description?: string;
    defaultValue: string;
}
export default function ServerVariable(props: ServerVariableProps): JSX.Element;
export {};
