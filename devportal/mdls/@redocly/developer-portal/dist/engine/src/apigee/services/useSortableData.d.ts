export declare const useSortableData: (items: any, config: {
    key: string;
    direction: 'ascending' | 'descending';
}) => {
    sortedItems: any[];
    requestSort: (key: any) => void;
    sortConfig: {
        key: string;
        direction: 'ascending' | 'descending';
    };
};
