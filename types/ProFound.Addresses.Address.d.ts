declare namespace ProFound.Addresses {
    interface AddressPlace {
        number: string;
        name: string;
    }
    interface AddressRoad {
        number: string;
        name: string;
    }
    interface AddressSuburb {
        name: string;
    }
    interface AddressTown {
        code: string;
        name: string;
    }
    interface AddressProvince {
        code: string;
        name: string;
    }
    interface AddressCountry {
        code: string;
        name: string;
    }
    interface AddressPostal {
        code: string;
    }
    interface AddressCoordinates {
        latitude: string;
        longitude: string;
    }
    interface Address {
        formattedAddress: string;
        place: AddressPlace;
        road: AddressRoad;
        suburb: AddressSuburb;
        town: AddressTown;
        province: AddressProvince;
        postal: AddressPostal;
        coordinates: AddressCoordinates;
    }
}
