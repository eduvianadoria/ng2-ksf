import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
var BackendService = (function () {
    function BackendService(http) {
        this.queryString = [];
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    BackendService.prototype.addHeaders = function (headers) {
        for (var h in headers) {
            if (headers[h]) {
                this.headers.append(h, headers[h]);
            }
        }
    };
    BackendService.prototype.addQueryString = function (queryString) {
        this.queryString = [];
        for (var p in queryString) {
            if (queryString[p])
                this.queryString.push(encodeURIComponent(p) + "=" + encodeURIComponent(queryString[p]));
        }
    };
    BackendService.prototype.getQueryString = function () {
        return (this.queryString.join("&") ?
            "?" + this.queryString.join("&")
            : "");
    };
    BackendService.prototype.getUrl = function (url) {
        return url + this.getQueryString();
    };
    BackendService.prototype.getAll = function (url, queryString, headers) {
        this.addQueryString(queryString);
        this.addHeaders(headers);
        return this.http
            .get(this.getUrl(url), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BackendService.prototype.getOne = function (url, queryString, headers) {
        this.addQueryString(queryString);
        this.addHeaders(headers);
        return this.http
            .get(this.getUrl(url), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    BackendService.prototype.post = function (url, body, queryString, headers) {
        this.addQueryString(queryString);
        this.addHeaders(headers);
        return this.http
            .post(this.getUrl(url), JSON.stringify(body), { headers: this.headers });
    };
    BackendService.prototype.put = function (url, body, queryString, headers) {
        this.addQueryString(queryString);
        this.addHeaders(headers);
        return this.http
            .put(this.getUrl(url), JSON.stringify(body), { headers: this.headers });
    };
    BackendService.prototype.delete = function (url, queryString, headers) {
        this.addQueryString(queryString);
        this.addHeaders(headers);
        return this.http
            .delete(this.getUrl(url));
    };
    return BackendService;
}());
export { BackendService };
BackendService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BackendService.ctorParameters = function () { return [
    { type: Http, },
]; };
//# sourceMappingURL=backend.service.js.map