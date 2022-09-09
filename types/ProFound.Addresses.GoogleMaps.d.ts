/// <reference types="google.maps" />
declare namespace ProFound.Addresses {
    interface GoogleMapsOptions {
        googleMapGuid: string;
    }
    class GoogleMaps {
        private _geocoder;
        private _options;
        constructor(options: GoogleMapsOptions);
        geocodeByAddress(address: string): Promise<google.maps.GeocoderResult[]>;
        geocodeByLocation(location?: google.maps.LatLng | null | google.maps.LatLngLiteral): google.maps.GeocoderResult[];
    }
}
