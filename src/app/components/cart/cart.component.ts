import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AxiosServiceService } from 'src/app/axios-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: any
  provinces: any
  checkProvinces: boolean = false
  district: any
  checkDistrict: boolean = false
  wards: any
  discount: number = 0
  currentDiscount: any
  price: any
  totalPrice: any
  applyDiscount: any
  reduce: any
  cod: boolean = false
  online: boolean = false
  constructor(private service: AxiosServiceService) {

  }

  ngOnInit(): void {
    this.getTotalPrice()
    this.getProductOnCart()
    this.getProvince()
  }

  getProductOnCart() {
    this.service.getProductOnCart().then((res) => {
      this.cart = res;
      for (let i = 0; i < this.cart.length; i++) {
        this.price = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(res[i].cost))
        this.cart[i].cost = this.price
      }
      this.getTotalPrice()
    })
  }


  deleteProductFromCart(id: any) {
    this.service.deleteProductFromCart(id).then((res) => {
      this.getProductOnCart()
    })
  }

  getProvince() {
    axios.get('https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1').then((res) => {
      this.provinces = res.data.data.data
    }).catch((err) => {
      console.log(err);
    })
  }

  getDistrictByProvince(event: any) {
    axios.get(`https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${event.target.value}&limit=-1`).then((res) => {
      this.district = res.data.data.data
      this.checkProvinces = true
    }).catch((err) => {
      console.log(err);
    })
  }

  getWardsByDistrict(event: any) {
    axios.get(`https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${event.target.value}&limit=-1`).then((res) => {
      this.wards = res.data.data.data
      this.checkDistrict = true
    }).catch((err) => {
      console.log(err);
    })
  }

  getTotalPrice() {
    this.service.getTotalPrice().then(async (res) => {
      this.price = 0
      for (let i = 0; i < res.length; i++) {
        this.price += res[i].cost * res[i].count;
      }
      this.reduce = this.price * this.discount / 100
      this.totalPrice = this.price - (this.price * this.discount / 100)
      this.price = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(this.price))
      this.totalPrice = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(this.totalPrice))
      this.reduce = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(this.reduce))
    })
  }

  async discountCode(event: any) {
    await this.service.discountCode(event).then((res) => {
      this.discount = res[0].reduce;
      this.currentDiscount = res[0].reduce;
    })
  }

  applyDiscountCode() {
    this.applyDiscount = true
    this.getTotalPrice()
  }

  async getCountToChange(id: any, event: any) {
    await this.service.changeCount(id, { count: event.target.value })
    this.getTotalPrice()
  }


  codMethod() {
    this.cod = true
    this.online = false
  }

  onlineMethod() {
    this.online = true
    this.cod = false
    console.log(this.online)
  }
}
