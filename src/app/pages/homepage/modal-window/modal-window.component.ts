import {Component, Input, OnInit} from '@angular/core';
import {ShortUrl} from "../../../model/shortUrl";
import {ClipboardService} from "ngx-clipboard";
//import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {


  @Input()
  shortUrl: ShortUrl | undefined;

  constructor(public activeModal: NgbActiveModal, private clipboardService: ClipboardService) {
  }

  ngOnInit(): void {
  }

  goToLink(): void {
    if (!this.shortUrl)
      return;

    window.open(this.shortUrl.shortUrl, "_blank")


    this.activeModal.close()
  }

  copy() {
    if (!this.shortUrl)
      return;

    this.clipboardService.copy(this.shortUrl.shortUrl)

    this.activeModal.close()
  }
}
