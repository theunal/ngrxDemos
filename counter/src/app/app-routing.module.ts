import { PostAddComponent } from './components/post/post-add/post-add.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { PostListComponent } from './components/post/post-list/post-list.component';
import { PostUpdateComponent } from './components/post/post-update/post-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  {
    path: 'posts', component: PostListComponent, children: [
      { path: 'add', component: PostAddComponent },
      { path: 'update/:id', component: PostUpdateComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
