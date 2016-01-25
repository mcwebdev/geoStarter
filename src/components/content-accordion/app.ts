import { bootstrap } from 'angular2/platform/browser';
import { Component, View } from 'angular2/core';
import {NgFor} from 'angular2/common';

import {Accordion, AccordionGroup} from './accordion';

@Component({
  selector: 'content-accordion'
})
@View({
  templateUrl: 'src/components/content-accordion/app.html',
  directives: [Accordion, AccordionGroup, NgFor]
})
export class contentAccordion {
  isOpen:boolean = false;

  groups:Array<any> = [
    {
      subHeading: '',
      heading: 'NGC-US FINANCE DOCUMENTS',
      content: 'Dynamic as well'
    },
    {
      subHeading: '',
      heading: 'NGC-US FINANCE DOCUMENTS',
      content: 'Dynamic as well'
    },
    {
      subHeading: '',
      heading: 'NGC-US FINANCE DOCUMENTS',
      content: 'Dynamic as well'
    },
    {
      subHeading: '',
      heading: 'NGC-US FINANCE DOCUMENTS',
      content: 'Dynamic as well'
    },
    {
      subHeading: '',
      heading: 'NGC-US FINANCE DOCUMENTS',
      content: 'Dynamic as well'
    }
  ];

  subgroups:Array<any> = [
    {
      subHeading: '',
      heading: 'Sub Group 1',
      content: 'estias quam facilis ipsum ab asperum blanditiis tempora molestiae! Optio, asperiores  '
    },
    {
      subHeading: '',
      heading: 'Sub Group 2',
      content: 'estias quam facilis ipsum ab asperum blanditiis tempora molestiae! Optio, asperiores'
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

