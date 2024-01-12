import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import {LoginComponent} from '../app/login/login.component';
import {BuyTokenComponent} from '../app/buy.tokens/buy.tokens.component';
import {SignupComponent} from '../app/signup/signup.component';
import {TransactionComponent} from '../app/transactions/transaction.component';
import {ProfileComponent} from '../app/profile/profile.component';
import {forgotpasswordComponent} from '../app/forgotpassword/forgotpassword.component';

export const ROUTES: Routes = [
  { path: '',      component: LoginComponent },
  {path: 'buy.tokens',      component:  BuyTokenComponent},
  {path: 'transaction',      component:  TransactionComponent},
  {path: 'profile',      component:  ProfileComponent},
  { path: 'signup',      component: SignupComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'forgotpassword', component: forgotpasswordComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
