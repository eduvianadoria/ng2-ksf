import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ResponseAll } from './response-all';
export declare class BackendService {
    http: Http;
    headers: Headers;
    queryString: Array<string>;
    constructor(http: Http);
    private addHeaders(headers);
    private addQueryString(queryString);
    private getQueryString();
    private getUrl(url);
    getAll(url: string, queryString?: any, headers?: any): Observable<ResponseAll>;
    getOne(url: string, queryString?: any, headers?: any): Observable<Response>;
    post(url: string, body: Object, queryString?: any, headers?: any): Observable<Response>;
    put(url: string, body: Object, queryString?: any, headers?: any): Observable<Response>;
    delete(url: string, queryString?: any, headers?: any): Observable<Response>;
}
