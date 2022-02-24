/// <reference types="react" />
export default function Checkbox(props: {
    id: string;
    checked: boolean;
    onChange: (e: any) => void;
    label: string | JSX.Element[] | JSX.Element;
    disabled?: boolean;
}): JSX.Element;
