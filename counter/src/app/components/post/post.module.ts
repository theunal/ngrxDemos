import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostAddComponent } from "./post-add/post-add.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostUpdateComponent } from "./post-update/post-update.component";


const routes: Routes = [
    {
        path: '', component: PostListComponent, children: [
            { path: 'add', component: PostAddComponent },
            { path: 'update/:id', component: PostUpdateComponent }
        ]
    }
]


@NgModule({
    declarations: [
        PostListComponent,
        PostAddComponent,
        PostUpdateComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ]
})
export class PostModule {

}