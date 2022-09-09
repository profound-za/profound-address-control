declare namespace ProFound.Addresses.QuickSearch {
    interface ReturnedAutoCompleteItem {
        ID: string;
        Text: string;
        Provider: number;
    }
    interface IOptions {
        htmlInputElement: HTMLInputElement;
        emptyMsg?: string;
        minLength?: number;
        loadAddressFromCoordinates?: boolean;
    }
    class Control {
        private _options;
        private _result;
        private _allowedChars;
        constructor(options: IOptions);
        LocateMyAddress(): void;
        private RenderAutoComplete;
        onSelectedAddressLoaded(address: Address): void;
        private FindMatchedAddresses;
        private GetSelectedAddresses;
        LoadAddressesInfoFromCoordinates(latitude: number, longitude: number): void;
        private GetAddressesInfoByCoordinates;
    }
}
