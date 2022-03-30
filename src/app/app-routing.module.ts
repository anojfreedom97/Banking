import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
const routes: Routes = [
  //{ path: '', component: HomeComponent },

  { path: 'branch-details', component: BranchDetailsComponent },
  { path: 'account-details', component: AccountDetailsComponent },
  { path: 'customer-details', component: CustomerDetailsComponent },
  { path: 'customer-address', component: CustomerAddressComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
