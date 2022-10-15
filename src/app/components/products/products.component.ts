import { AxiosServiceService } from 'src/app/axios-service.service';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ToastService } from 'angular-toastify';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  readData: any
  category: any
  productData: any
  checkLoad: boolean = true
  checkActive: boolean = false
  sort: any
  selectAll: boolean = true
  categorySelected: any
  aboutPriceSelected: any
  action: any
  constructor(private service: AxiosServiceService, private _toastService: ToastService) {
    this.sort = "id-asc"
    this.action = "category"
  }

  ngOnInit(): void {
    this.getAllProduct()
    this.getCategory()
  }


  getAllProduct() {
    this.selectAll = true
    this.service.getAllProduct()
      .then((res) => {
        let price
        this.readData = res;
        for (let i = 0; i < this.readData.length; i++) {
          price = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(res[i].cost))
          this.readData[i].cost = price
        }
        this.checkLoad = false
      })
  }

  getAllProductSortBy() {
    this.service.getAllProductSortBy(this.sort)
      .then((res) => {
        let price
        this.readData = res;
        for (let i = 0; i < this.readData.length; i++) {
          price = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(res[i].cost))
          this.readData[i].cost = price
        }
        this.checkLoad = false
      })
  }

  getProduct(id: any) {
    this.productData = ''
    let price
    this.service.getProduct(id).then((res) => {
      this.productData = res;
      for (let i = 0; i < this.productData.length; i++) {
        price = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(res[i].cost))
        this.productData[i].cost = price
      }
    })
  }

  getCategory() {
    this.service.getCategory()
      .then((res) => {
        this.category = res;
      })
  }


  chooseCategory(category: any) {
    this.selectAll = false
    this.categorySelected = category
    this.action = 'category'
    this.service.chooseCategory(category, this.sort)
      .then((res) => {
        let price
        this.readData = res;
        for (let i = 0; i < this.readData.length; i++) {
          price = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(res[i].cost))
          this.readData[i].cost = price
        }
      })
  }

  aboutPrice(fromto: any) {
    this.action = 'price'
    this.selectAll = false
    this.aboutPriceSelected = fromto
    this.service.aboutPrice(fromto, this.sort)
      .then((res) => {
        let price
        this.readData = res;
        for (let i = 0; i < this.readData.length; i++) {
          price = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(res[i].cost))
          this.readData[i].cost = price
        }
      })
  }


  async sortBy(event: any) {
    this.sort = event.target.value
    if (this.action === 'category') {
      await this.chooseCategory(this.categorySelected)
    } if (this.action === 'price') {
      await this.aboutPrice(this.aboutPriceSelected)
    }
  }

  async allSortBy(event: any) {
    this.sort = event.target.value
    await this.getAllProductSortBy()
  }

  addToCart(id: number) {
    this.service.addToCart(id).then((res) => {
      this._toastService.success('Add product to cart successfully');
    })
  }
}
