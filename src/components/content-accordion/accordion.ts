import { Component, View } from 'angular2/core';
import {NgClass} from 'angular2/common';

@Component({
  selector: 'accordion, [accordion]',
  host: {
    'class': 'panel-group'
  }
})
@View({
  templateUrl: 'src/components/content-accordion/accordion.html'
})
export class Accordion {
  private groups:Array<AccordionGroup> = [];

  addGroup(group:AccordionGroup): void {
    this.groups.push(group);
  }

  /*closeOthers(openGroup:AccordionGroup): void {
    this.groups.forEach((group:AccordionGroup) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }*/

  removeGroup(group:AccordionGroup): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}

@Component({
  selector: 'accordion-group, [accordion-group]',
  inputs: ['heading','subHeading', 'isOpen']
})
@View({
  templateUrl: 'src/components/content-accordion/accordion-group.html',
  directives: [NgClass]
})
export class AccordionGroup {
  private _isOpen:boolean = false;

  constructor(private accordion:Accordion) {
    this.accordion.addGroup(this);
  }

  toggleOpen(event) {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

  onDestroy(): void {
    this.accordion.removeGroup(this);
  }

  public get isOpen(): boolean {
    return this._isOpen;
  }

  public set isOpen(value:boolean): void {
    this._isOpen = value;
    if (value) {
      //this.accordion.closeOthers(this);
    }
  }
}
