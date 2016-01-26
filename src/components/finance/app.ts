import {bootstrap} from 'angular2/platform/browser';
import {Component, provide} from 'angular2/core';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
  LocationStrategy, HashLocationStrategy} from 'angular2/router';

// Home Component
@Component({
  selector: 'dome',
  template: '<h1 class="home">Home Component</h1>',
  styles: ['.home {background: red}'],
})
export class HomeComponent {}

// Product Details Component
@Component({
  selector: 'product',
  template: '<h1 class="product">Test Detail Component</h1>',
  styles: ['.product {background: cyan}']
})
export class ProductDetailComponent {}

// Root Component
@Component({
  selector: 'basic-routing2',
  template: `<a [routerLink]="['/Home']">Home</a>
<a [routerLink]="['/FinanceDetail']">test route</a>
<router-outlet></router-outlet>`,
directives: [ ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/',        component: HomeComponent, name: 'Home'},
  {path: '/finance', component: ProductDetailComponent, name: 'FinanceDetail'  }
])
class RootComponent{
}

bootstrap(RootComponent, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);
