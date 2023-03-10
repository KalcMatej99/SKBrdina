import { Component, OnInit, Input, Injectable, ViewChild, TemplateRef  } from '@angular/core';
import {NgbModal, NgbModalRef, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
  
  
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html'
})

@Injectable()
export class NgbdModalBasic {
  @Input() title: String = "";
  @Input() subtitle: String = "";
  @Input() button_text: String = "cxff";
  
  @ViewChild('modal')
  private modalContent!: TemplateRef<NgbdModalBasic>;
  private modalRef!: NgbModalRef;

  public content:string = "";
  constructor(private modalService: NgbModal) { }

  open(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      this.modalRef = this.modalService.open(this.modalContent)
      this.modalRef.result.then(resolve, resolve)
    })
  }

  async close(): Promise<void> {
      this.modalRef.close();
  }

  async dismiss(): Promise<void> {
    this.modalRef.dismiss();
  }

  ngOnInit(): void {}
}