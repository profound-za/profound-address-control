declare namespace ProFound.Addresses {
    var apiBaseUrl: string;
    var sessionGuid: string;
    function getApiMethodUrl(methoPath: string): string;
    function callApiMethod<TResult>(methoPath: string, data?: Object, method?: ProFound.General.ApiRequestMethod, requestOptions?: {}): Promise<unknown>;
}
