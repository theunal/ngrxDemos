import { Observable } from 'rxjs';
import { AuthResponse } from './../models/authResponse';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { User } from '../models/user';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // timeoutInterval: any

    constructor(private http: HttpClient) { }

    login(email: string, password: string): Observable<AuthResponse> {
        return this.http
            .post<AuthResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
                { email, password, returnSecureToken: true }
            )
    }

    formatUser(data: AuthResponse) {
        let expirationDate = new Date(new Date().getTime() + +data.expiresIn * 1000)
        let user: User = {
            email: data.email,
            idToken: data.localId,
            localId: data.localId,
            expirationDate
        }
        return user
    }

    // signUp(email: string, password: string): Observable<AuthResponseData> {
    //   return this.http.post<AuthResponseData>(
    //     `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`,
    //     { email, password, returnSecureToken: true }
    //   );
    // }



    // getErrorMessage(message: string) {
    //   switch (message) {
    //     case 'EMAIL_NOT_FOUND':
    //       return 'Email Not Found';
    //     case 'INVALID_PASSWORD':
    //       return 'Invalid Password';
    //     case 'EMAIL_EXISTS':
    //       return 'Email already exists';
    //     default:
    //       return 'Unknown error occurred. Please try again';
    //   }
    // }

    // setUserInLocalStorage(user: User) {
    //   localStorage.setItem('userData', JSON.stringify(user));

    //   this.runTimeoutInterval(user);
    // }

    // runTimeoutInterval(user: User) {
    //   const todaysDate = new Date().getTime();
    //   const expirationDate = user.expireDate.getTime();
    //   const timeInterval = expirationDate - todaysDate;

    //   this.timeoutInterval = setTimeout(() => {
    //     this.store.dispatch(autoLogout());
    //     //logout functionality or get the refresh token
    //   }, timeInterval);
    // }

    // getUserFromLocalStorage() {
    //   const userDataString = localStorage.getItem('userData');
    //   if (userDataString) {
    //     const userData = JSON.parse(userDataString);
    //     const expirationDate = new Date(userData.expirationDate);
    //     const user = new User(
    //       userData.email,
    //       userData.token,
    //       userData.localId,
    //       expirationDate
    //     );
    //     this.runTimeoutInterval(user);
    //     return user;
    //   }
    //   return null;
    // }

    // logout() {
    //   localStorage.removeItem('userData');
    //   if (this.timeoutInterval) {
    //     clearTimeout(this.timeoutInterval);
    //     this.timeoutInterval = null;
    //   }
    // }
}