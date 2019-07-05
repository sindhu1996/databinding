import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private user = new BehaviorSubject<string>('sindhu');
 cast = this.user.asObservable();
 
constructor() { }

editUser(newUSer){
  this.user.next(newUSer);
}

}
