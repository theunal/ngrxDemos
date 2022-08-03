import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { loginStart, loginSuccess } from "./auth.action";


@Injectable()
export class AuthEffect {

    constructor(private actions$: Actions, private authService: AuthService) { }

    login$ = createEffect(() => {
        return this.actions$.pipe(ofType(loginStart), exhaustMap((action) => {
            return this.authService.login(action.email, action.password).pipe(map((data) => {
                let user = this.authService.formatUser(data)
                return loginSuccess({ user })
            }))
        }))
    })

}