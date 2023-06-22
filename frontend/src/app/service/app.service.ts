import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' });
export class AppService {
    constructor(private http: HttpClient) {

    }
    getService(data?: any, api: any) {
        if (data) {
            return this.http.get(api, data);
        }
        return this.http.get(api);
    }
    postService(data: any, api: any) {
        return this.http.post(api, data);
    }
    
}