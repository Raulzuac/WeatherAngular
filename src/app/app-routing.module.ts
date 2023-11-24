import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './weather/components/main-page/main-page.component';
import { AdvancedDetailsPageComponent } from './weather/components/advanced-details-page/advanced-details-page.component';

const routes: Routes = [
  {
    path:'main',
    component: MainPageComponent
  },
  {
    path: 'advanced',
    component: AdvancedDetailsPageComponent
  },
  {
    path: '**',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
