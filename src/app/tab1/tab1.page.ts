import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular'; // Importa ModalController
import { ModalComponent } from '../modal/modal.component'; // Asegúrate de importar el componente modal
 
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  constructor(private modalController: ModalController) {} 

  async openModal(id: number) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        modalId: id,
      },
    });
    return await modal.present();
  }

}
