/// <reference types="react" />
export default function Dialog(props: {
    onOpen: () => void;
    onClose: () => void;
    open: boolean;
    children: JSX.Element | JSX.Element[];
}): JSX.Element;
