import { PolicySuccessComponent } from './policy-success/policy-success.component';
import { ProductsInfoComponent } from './products-info/products-info.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { PolicyDetailsComponent } from './policy-details/policy-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrgnizationInfoComponent } from './orgnization-info/orgnization-info.component';


const routes: Routes = [

  {   path: 'home',   component: AppComponent   },
  {   path: 'newpolicy',   component: PolicyDetailsComponent   },
  {   path: 'person',   component: PersonInfoComponent   },
  {   path: 'organization',   component: OrgnizationInfoComponent   },
  {   path: 'products',   component: ProductsInfoComponent   },
  {   path: 'success',   component: PolicySuccessComponent   },
  // {  path: '', redirectTo: 'success', pathMatch: 'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
