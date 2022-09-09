declare namespace ProFound.General {
    var rootUrl: string;
    function getJson(urlOrPath: string, requestParams?: Object): Promise<any>;
    enum ApiRequestMethod {
        GET = "GET",
        POST = "POST",
        PUT = "PUT",
        DELETE = "DELETE"
    }
    enum ApiRequestContentType {
        json = "application/json",
        urlEncoded = "application/x-www-form-urlencoded"
    }
    enum ApiRequestMode {
        cors = "cors",
        noCors = "no-cors",
        anyCors = "*cors",
        sameOrigin = "same-origin"
    }
    function callApi<TResult>(url: string, data?: Object, method?: ApiRequestMethod, requestOptions?: {}): Promise<TResult>;
    function objectToUrl(obj: any): string;
    function getActionUrl(actionPath: string): string;
    function mergeObjectData(destinationObject?: any, sourceObject?: any): any;
    function copyObjectData(destinationObject: any, sourceObject: any): void;
    function extend(...args: any[]): any;
}
