import { bootstrap } from 'angular2/platform/browser';
import { Component, View } from 'angular2/core';
import {NgFor} from 'angular2/common';

import {Accordion, AccordionGroup} from './accordion';

@Component({
  selector: 'sidenav-accordion'
})
@View({
  templateUrl: 'src/components/sidenav-accordion/app.html',
  directives: [Accordion, AccordionGroup, NgFor]
})
export class sidenavAccordion {
  isOpen:boolean = false;

  groups:Array<any> = [
    {
      subHeading: '',
      heading: 'Contracting',
      content: 'Dynamic as well'
    },
    {
      subHeading: 'pre-production /',
      heading: 'production',
      content: 'Dynamic as well'
    },
    {
      subHeading: 'post',
      heading: 'production',
      content: 'Dynamic as well'
    },
    {
      subHeading: 'master',
      heading: 'materials',
      content: 'Dynamic as well'
    },
    {
      subHeading: 'project /',
      heading: 'close-out',
      content: 'Dynamic as well'
    }
  ];


  links:Array<any> = [
    {
      content: 'budget'
    },
    {
      content: 'production schedule'
    },
    {
      content: 'materials list'
    },
    {
      content: 'milestone schedule'
    },
    {
      content: 'technical specifications'
    },
    {
      content: 'clocks'
    },
    {
      content: 'camera selection'
    },
    {
      content: 'preferred vendors'
    },
    {
      content: 'talent'
    },
    {
      content: 'finance'
    }
  ];
  /*removeDynamic() {
    this.groups.pop();
  }*/
}

