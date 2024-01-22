import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { ProdutsComponent } from './produts/produts.component';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import { AppRoutingModule } from './app-routing.module';*/
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
//import { JwtModule } from '@auth0/angular-jwt';
//import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    UsersComponent,
    CategoryComponent,
    ProdutsComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
   //AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    //JwtModule.forRoot({
    //  config: {
    //    tokenGetter: () => localStorage.getItem('token'),
    //  },
    //}),
    BrowserAnimationsModule,
  //  ToastrModule.forRoot({
  //    positionClass: 'toast-top-right',
  //    timeOut: 3000,
  //    preventDuplicates: true,
  //  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
