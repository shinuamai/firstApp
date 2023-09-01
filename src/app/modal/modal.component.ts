import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() modalId: number = 0;

  title: string = "titulo";
  content: string = "contenido";

  constructor(private modalController: ModalController) {}

  async ngOnInit() {
    this.configureModalContent();
  }

  async configureModalContent() {
    switch (this.modalId) {
      case 1:
        this.title = 'Procesamiento complejo de controles de cumplimiento';
        this.content = 'Los pagos transfronterizos actuales suelen incluir datos limitados o no estructurados. Para garantizar el cumplimiento, los bancos tienen que gestionar una gran cantidad de sanciones y requisitos de cumplimiento que agregan costos y tiempo de procesamiento para los pagos transfronterizos.';
        break;
      case 2:
        this.title = 'Horario de funcionamiento limitado';
        this.content = 'El procesamiento de pagos transfronterizos hoy en día depende de sistemas de compensación nacionales que operan en horarios limitados en diferentes zonas horarias. Esto prohíbe la implementación de un modelo de pago transfronterizo eficiente, 24 horas al día, 7 días a la semana, en tiempo real.';
        break;
      case 3:
        this.title = 'Largas cadenas de transacciones';
        this.content = 'Los pagos transfronterizos basados en el actual modelo de liquidación de banca corresponsal dependen de múltiples intermediarios para transmitir el hallazgo y el mensaje de pago.';
        break;
      case 4:
        this.title = 'Costos de financiación';
        this.content = 'La liquidación de pagos transfronterizos depende en gran medida de la financiación disponible. Para racionalizar los costos de financiamiento para la facilitación de pagos transfronterizos, los bancos deben adoptar un enfoque de día valor para las entradas y salidas netas antes de financiar sus cuentas nostro y/o de liquidación.';
        break;
      default:
        this.title = 'Título por defecto';
        this.content = 'Contenido por defecto';
    }
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}

