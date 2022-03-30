import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccountDetailsComponent,
    BranchDetailsComponent,
    CustomerDetailsComponent,
    CustomerAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
