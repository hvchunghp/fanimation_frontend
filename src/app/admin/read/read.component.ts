import { AxiosServiceService } from 'src/app/axios-service.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
})
export class ReadComponent implements OnInit {
  description: any
  readData: any;
  previewImg: any;
  price: any
  category: any
  // base64: string = "";
  // fileSelected?: Blob;
  // imageUrl?: string;
  // imageSource: any;
  @ViewChild("myckeditor") ckeditor: any;
  constructor(private service: AxiosServiceService, private _toastService: ToastService, private sant: DomSanitizer) {
    this.description = ``;
  }

  ngOnInit(): void {
    this.getAllProduct();
    this.getCategory()
  }


  // selectFile(files: FileList): void {
  //   this.fileSelected = files[0];
  //   this.imageUrl = this.sant.bypassSecurityTrustUrl(window.URL.createObjectURL(this.fileSelected)) as string;
  // }

  productForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });

  getAllProduct() {
    this.service.getAllProduct()
      .then((res) => {
        let price
        this.readData = res;
        for (let i = 0; i < this.readData.length; i++) {
          price = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(res[i].cost))
          this.readData[i].cost = price
        }
      })
  }

  deleteProduct(id: any) {
    this.service.deleteProduct(id)
      .then((res) => {
        this._toastService.success('Delete successfully');
        this.getAllProduct();
      })
  }

  productSubmit() {
    // let reader = new FileReader();
    // reader.readAsDataURL(this.fileSelected as Blob);
    // reader.onloadend = () => {
    //   this.base64 = reader.result as string;
    // }
    if (
      this.productForm.value.productName === '' ||
      this.productForm.value.cost === '' ||
      this.productForm.value.category === '' ||
      this.productForm.value.image === ''
    ) {
      this._toastService.error('Missing parameters');

    } else {
      let value =
      {
        productName: this.productForm.value.productName,
        cost: this.productForm.value.cost,
        category: this.productForm.value.category,
        description: this.description,
        image: this.productForm.value.image
      }

      this.service.productSubmit(value)
        .then((res) => {
          this._toastService.success('Create product successfully');
          this.productForm.reset();
          this.description = ``
          this.getAllProduct();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  getCategory() {
    this.service.getCategory().then((res) => {
      this.category = res
    })
  }

  previewImage(event: any) {
    this.previewImg = event
  }
}
