import { Component, ViewChild } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }
  constructor() {}
  isModalOpen1 = false;
  isModalOpen2 = false;
  isModalOpen3 = false;
  isModalOpen4 = false;
  isModalOpen5 = false;
  isModalOpen6 = false;
  isModalOpen7 = false;
  isModalOpen8 = false;
  isModalOpen9 = false;

  setOpen1(isOpen: boolean) {
    this.isModalOpen1 = isOpen;
  }

  setOpen2(isOpen: boolean): void {
    this.isModalOpen2 = isOpen;
  }

  setOpen3(isOpen: boolean) {
    this.isModalOpen3 = isOpen;
  }
  setOpen4(isOpen: boolean) {
    this.isModalOpen4 = isOpen;
  }
  setOpen5(isOpen: boolean) {
    this.isModalOpen5 = isOpen;
  }
  setOpen6(isOpen: boolean) {
    this.isModalOpen6 = isOpen;
  }
  setOpen7(isOpen: boolean) {
    this.isModalOpen7 = isOpen;
  }
  setOpen8(isOpen: boolean) {
    this.isModalOpen8 = isOpen;
  }
  setOpen9(isOpen: boolean) {
    this.isModalOpen9 = isOpen;
  }
}
