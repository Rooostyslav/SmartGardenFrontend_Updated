import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavigationComponent } from './navigation/side-navigation/side-navigation.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { SMART_GARDEN_API } from './app-injection-tokents';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    UsersListComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: SMART_GARDEN_API, useValue: environment.smartGardenApi }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
