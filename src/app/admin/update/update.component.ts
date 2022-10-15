import { AxiosServiceService } from 'src/app/axios-service.service';
import { ToastService } from 'angular-toastify';
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  @ViewChild("myckeditor") ckeditor: any;
  descriptionHTML: any
  id: any;
  checkDataArr?: boolean = true;
  previewImg: any;
  getProductData: any;
  category: any
  constructor(
    private _toastService: ToastService,
    private _router: ActivatedRoute,
    private service: AxiosServiceService
  ) {
    this.descriptionHTML = ``;
  }


  ngOnInit(): void {
    this.id = this._router.snapshot.paramMap.get('id');
    this.getData()
    this.getCategory()
  }
  productForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  });
  getData() {
    this.service.getProduct(this.id)
      .then((res) => {
        this.getProductData = res[0]
        this.productForm.patchValue({
          productName: this.getProductData.productName,
          cost: this.getProductData.cost,
          category: this.getProductData.category,
          description: this.getProductData.description,
          image: this.getProductData.image,
        });
        this.descriptionHTML = this.productForm.value.description;
      }).catch((err) => {
        this.checkDataArr = false;
        console.log(err);
      });
  }



  updateProduct() {
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
        description: this.descriptionHTML,
        image: this.productForm.value.image
      }
      this.service.updateProduct(this.id, value)
        .then((res) => {
          this._toastService.success('Update successfully');
        })
        .catch((err) => {
          this._toastService.error('Error');
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
