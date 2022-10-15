import { AxiosServiceService } from './../../axios-service.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import axios from 'axios';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  bestSeller: any;
  cheapPrice: any;
  price: any
  id: any
  category: any;
  checkLoad: boolean = true
  productData: any
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: false,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      },
    },
    nav: true,
    navText: ['Previous', 'Next'],
  }
  constructor(private _router: ActivatedRoute, private _toastService: ToastService, private service: AxiosServiceService) { }
  ngOnInit(): void {
    this.getTopSeller();
    this.getCheapPrice()
  }

  getTopSeller() {
    this.service.getTopSeller().then((res) => {
      this.bestSeller = res;
      for (let i = 0; i < this.bestSeller.length; i++) {
        this.price = this.bestSeller[i].cost
        this.price = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(res[i].cost))
        this.bestSeller[i].cost = this.price
      }
      this.checkLoad = false
    })
  }

  getCheapPrice() {
    this.service.aboutPrice('0-100', 'cost-asc').then((res) => {
      this.cheapPrice = res
      for (let i = 0; i < this.cheapPrice.length; i++) {
        this.price = this.cheapPrice[i].cost
        this.price = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(res[i].cost))
        this.cheapPrice[i].cost = this.price
      }
      this.checkLoad = false
    })
  }

  getProduct(id: any) {
    this.productData = ''
    this.service.getProduct(id).then((res) => {
      this.productData = res;
      for (let i = 0; i < this.productData.length; i++) {
        this.price = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(res[i].cost))
        this.productData[i].cost = this.price
      }
    })
  }

  addToCart(id: number) {
    this.service.addToCart(id).then((res) => {
      this._toastService.success('Add product to cart successfully');
    })
  }
}
