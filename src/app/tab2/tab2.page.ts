import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  isModalOpen1 = false;
  isModalOpen2 = false;
  isModalOpen3 = false;

  setOpen1(isOpen: boolean) {
    this.isModalOpen1 = isOpen;
  }

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }

  setOpen3(isOpen: boolean) {
    this.isModalOpen3 = isOpen;
  }



}
