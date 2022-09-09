declare namespace ProFound.Controls.AutoComplete {
    interface Item {
        label?: string;
        group?: string;
        dataItem: any;
    }
    interface Settings<T extends Item> {
        input: HTMLInputElement;
        render?: (item: T, currentValue: string) => HTMLDivElement | undefined;
        renderGroup?: (name: string, currentValue: string) => HTMLDivElement | undefined;
        className?: string;
        minLength?: number;
        emptyMsg?: string;
        onSelect: (item: T, input: HTMLInputElement) => void;
        fetch: (text: string, update: (items: Array<T>) => void) => void;
    }
    interface Result {
        destroy: () => void;
    }
    function Render<T extends Item>(settings: Settings<T>): Result;
}
