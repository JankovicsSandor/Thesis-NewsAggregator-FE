import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObjectToQuery } from '@utils';

@Injectable()
export class NetworkClientService {
  constructor(protected http: HttpClient, protected baseUrl: string) {}

  protected get<T>(url: string, params: any = null) {
    let filteredParams = ObjectToQuery(params);
    return this.http.get<T>(this.baseUrl + url, { params: filteredParams });
  }

  protected post<T>(url: string, params: any = null, body: any) {
    let filteredParams = ObjectToQuery(params);
    return this.http.post<T>(this.baseUrl + url, body, {
      params: filteredParams
    });
  }
}
