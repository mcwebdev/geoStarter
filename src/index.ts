import { bootstrap } from 'angular2/platform/browser';
//import {bind} from 'angular2/di';
import { provide } from 'angular2/core';
import { FORM_PROVIDERS } from 'angular2/common';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,
  LocationStrategy, HashLocationStrategy} from 'angular2/router';
import { Http, HTTP_PROVIDERS } from 'angular2/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';
import { Component, View } from 'angular2/core';


import { App } from './app/app';
import { sidenavAccordion } from './components/sidenav-accordion/app';
import { contentAccordion } from './components/content-accordion/app';
import { ProductDetailComponent } from './components/finance/app';

bootstrap(
  App,
  [
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig({
          tokenName: 'jwt'
        }), http);
      },
      deps: [Http]
    })
  ]
);

bootstrap(sidenavAccordion);
bootstrap(contentAccordion);
bootstrap(ProductDetailComponent);
