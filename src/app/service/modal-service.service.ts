import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalServiceService {
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
}
