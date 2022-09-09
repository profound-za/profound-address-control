/// <reference types="google.maps" />
declare namespace markerClusterer {
    class MarkerClusterer {
        constructor(options: any);
    }
}
declare namespace ProFound.Addresses.PickpointPicker {
    interface ControlOptions {
        googleMapGuid: string;
        orderInfo: OrderInfo;
        onPickpointSelected?: (location: Location) => void;
    }
    interface OrderInfo {
        fromAddress: string;
        toAddress: string;
        width: number;
        height: number;
        length: number;
        weight: number;
    }
    interface Location {
        id: number;
        code: string;
        name: string;
        addressText: string;
        directions: string;
        distance?: number;
        openingHoursDescription: string;
        latitude: number;
        longitude: number;
        provider: string;
        iconUrl: string;
        imagesUrl: string[];
        marker?: google.maps.Marker;
        div?: HTMLElement;
    }
    class Control {
        private _containerElement;
        private _locateMeButton;
        private _searchAddressTextInput;
        private _mapView;
        private _map;
        private _googleMaps;
        private _currentAddress;
        private _infoWindow;
        private _locations;
        private _locationsContainer;
        private _centerMarker;
        private _selectedLocation;
        private _options;
        constructor(containerElement: HTMLElement, options: ControlOptions);
        private appendNewElement;
        onPickpointSelected(location: Location): void;
        zoomToAddress(address: string): Promise<void>;
        zoomToGeometry(geometry: google.maps.GeocoderGeometry): void;
        createDefaultControlUI(): void;
        bindNearMeButton(buttonElement: HTMLButtonElement): void;
        private initNearMeButton;
        private loadMarkers;
        private plotRouteToLocation;
        private renderLocations;
        private addDivForLocation;
        private selectLocation;
        private loadPickpoints;
        init(): void;
    }
}
