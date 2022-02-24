/// <reference types="react" />
import { MarkerService } from '../../redoc-lib';
interface SearchFieldProps {
    showPopUp: () => void;
    searchValue: string;
    marker: MarkerService;
    setSearchValue: (value: string) => void;
}
export declare const SearchField: ({ showPopUp, searchValue, marker, setSearchValue, }: SearchFieldProps) => JSX.Element;
export {};
