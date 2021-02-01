import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibraryViewerComponent } from './ui-elements/library/library-viewer.component';
import { AddRecipeComponent } from './pages/add-recipe/add-recipe.component';

const routes: Routes = [
  { path: 'library', component: LibraryViewerComponent },
  { path: 'recipe/new', component: AddRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
