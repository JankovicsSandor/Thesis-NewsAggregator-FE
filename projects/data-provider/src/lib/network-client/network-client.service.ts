import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NetworkClientService {
  constructor(protected http: HttpClient, protected baseUrl: string) {}

  protected get<T>(url: string, params: any = null) {
    return this.http.get<T>(this.baseUrl + url, { params: params });
  }

  protected post<T>(url: string, params: any = null, body: any) {
    return this.http.post<T>(this.baseUrl + url, body, { params: params });
  }
}
