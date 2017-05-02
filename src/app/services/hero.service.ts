import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()


export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web API
  constructor (private http: Http) {}

  getInfo():Observable<string[]>{
    //noinspection TypeScriptValidateTypes
    return this.http.get("http://google.com")
      .map(res => res.json())
      .catch(err =>{
        console.log(err);
        //noinspection TypeScriptUnresolvedFunction
        return Observable.empty();
      })
  }



}
