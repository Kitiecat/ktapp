import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalContentComponent } from '../example-one/example-one.component';
import { ModalServiceService } from 'src/app/service/modal-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModalWithComponent() {
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...',
        ],
        title: 'Modal with component',
      },
    };
    this.bsModalRef = this.modalService.show(
      ModalContentComponent,
      initialState
    );
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
