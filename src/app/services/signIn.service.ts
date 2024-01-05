import { BehaviorSubject, Subject } from 'rxjs';

export class SignInService {
    private loggedIn = new BehaviorSubject<boolean>(false);
    loggedIn$ = this.loggedIn.asObservable();

    setLoggedIn(logIn: boolean) {
        this.loggedIn.next(logIn);
    }

    setLoggedOut(logOut: boolean) {
        this.loggedIn.next(logOut);
    }
}