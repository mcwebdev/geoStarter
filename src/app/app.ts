import {View, Component} from 'angular2/core';
import {Location, RouteConfig, RouterLink, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {Home} from '../home/home';
import {Login} from '../login/login';
import {Signup} from '../signup/signup';
import {HomeComponent} from '../components/finance/app';

let template = require('./app.html');

@Component({
  selector: 'auth-app'
})

@View({
  template: template,
  directives: [ LoggedInRouterOutlet ]
})
@RouteConfig([
  { path: '/', redirectTo: ['/Home'] },
  { path: '/home', component: Home, name: 'Home' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/signup', component: Signup, name: 'Signup' },
  { path: '/product', component: HomeComponent, name: 'ProductDetail'  }
])

export class App {
  constructor(public router: Router) {
  }
}
