import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
@Injectable()
export class NewsletterService {

    constructor(private http:HttpClient) {}
    
    addPushSubscriber(sub:any) {
       console.log(sub)
        return this.http.post('http://localhost:3000/notification/', sub);
    }

    send() {
        //return this.http.post('/api/newsletter', null);
    }

}
