import { AuthEffect } from './../../state/auth/auth.effect';
import { EffectsModule } from '@ngrx/effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from 'src/app/state/auth/auth.reducer';

const routes: Routes = [
    {
        path: '', children: [
            { path: 'login', component: LoginComponent }
        ]
    }
]

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        StoreModule.forFeature('auth', authReducer),
        EffectsModule.forFeature([AuthEffect])
    ]
})
export class AuthModule {

}