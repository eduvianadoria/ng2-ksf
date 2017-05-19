import { Injectable, Type } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ResponseAll } from './response-all';

@Injectable()
export class BackendService {
    
    http: Http;
    headers: Headers;
    queryString: Array<string> = [];

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    private addHeaders(headers: any): void {
        for(var h in headers) {
            if (headers[h]) {
                this.headers.append(h, headers[h]);
            }
        }
    }

    private addQueryString(queryString: any): void {
        this.queryString = [];
        for(var p in queryString) {
            if (queryString[p])
                this.queryString.push(encodeURIComponent(p) + "=" + encodeURIComponent(queryString[p]));
        }
    }

    private getQueryString(): string {
        return (
                this.queryString.join("&") ? 
                    "?" + this.queryString.join("&") 
                    : ""
            );
    }

    private getUrl(url: string): string {
        return url + this.getQueryString();
    }

    getAll(url: string, queryString?: any, headers?: any): Observable<ResponseAll> {

        this.addQueryString(queryString);
        this.addHeaders(headers);

        return this.http
                   .get(this.getUrl(url), { headers: this.headers })
                   .map(res => res.json());
    }

    getOne(url: string, queryString?: any, headers?: any): Observable<Response> {
        
        this.addQueryString(queryString);
        this.addHeaders(headers);

        return this.http
                   .get(this.getUrl(url), { headers: this.headers })
                   .map(res => res.json());
    }

    post(url: string, body: Object, queryString?: any, headers?: any): Observable<Response> {
        
        this.addQueryString(queryString);
        this.addHeaders(headers);

        return this.http
                    .post(this.getUrl(url), JSON.stringify(body), { headers: this.headers });
    }

    put(url: string, body: Object, queryString?: any, headers?: any): Observable<Response> {
        
        this.addQueryString(queryString);
        this.addHeaders(headers);

        return this.http
                   .put(this.getUrl(url), JSON.stringify(body), {headers: this.headers});
    }

    delete(url: string, queryString?: any, headers?: any):  Observable<Response>  {
        
        this.addQueryString(queryString);
        this.addHeaders(headers);

        return this.http
                    .delete(this.getUrl(url));
    }

}