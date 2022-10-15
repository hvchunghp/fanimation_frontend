import { AxiosServiceService } from 'src/app/axios-service.service';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ToastService } from 'angular-toastify';
import { ClipboardService } from 'ngx-clipboard';
@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {
  discountCode: any
  constructor(private service: AxiosServiceService, private _toastService: ToastService, private clipboardApi: ClipboardService) { }

  ngOnInit(): void {
    this.service.getAllDiscountCode().then((res) => {
      this.discountCode = res
    })
  }

  copyCode(code: any) {
    this.clipboardApi.copyFromContent(code)
    this._toastService.success('Copy to the clipboard success')
  }
}
