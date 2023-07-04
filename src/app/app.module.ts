import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingDetailsComponent } from './shopping/shopping-details/shopping-details.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { AppRoutingModule } from './app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavContentAreaDirective } from './sidenav/sidenavContentArea.directive';
import { SidenavService } from './sidenav/sidenav.service';
import { DefaultSidenavComponent } from './sidenav/default-sidenav/default-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShoppingListComponent,
    ShoppingDetailsComponent,
    ShoppingComponent,
    SidenavComponent,
    SidenavContentAreaDirective,
    DefaultSidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
