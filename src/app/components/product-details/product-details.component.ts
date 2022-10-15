import { AxiosServiceService } from 'src/app/axios-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productData: any
  price: any
  id: any
  bestSeller: any
  customOptions: OwlOptions = {
    loop: true,
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
    nav: false,
    navText: ['Previous', 'Next'],
  }
  constructor(private service: AxiosServiceService, private _router: ActivatedRoute, private _toastService: ToastService) {

  }

  ngOnInit(): void {
    this.id = this._router.snapshot.paramMap.get('id');
    this.productDetails();
    this.getTopSeller()
  }

  getTopSeller() {
    this.service.getTopSeller().then((res) => {
      this.bestSeller = res;
      for (let i = 0; i < this.bestSeller.length; i++) {
        this.price = this.bestSeller[i].cost
        this.price = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(res[i].cost))
        this.bestSeller[i].cost = this.price
      }
    })
  }
  productDetails() {
    this.service.productDetails(this.id).then((res) => {
      this.productData = res;
      for (let i = 0; i < this.productData.length; i++) {
        this.price = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(res[i].cost))
        this.productData[i].cost = this.price
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  addToCart(id: number) {
    this.service.addToCart(id).then((res) => {
      this._toastService.success('Add product to cart successfully');
    })
  }

  getProduct(id: any) {
    this.service.getProduct(id).then((res) => {
      this.productData = res;
      for (let i = 0; i < this.productData.length; i++) {
        this.price = (new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'USD' }).format(res[i].cost))
        this.productData[i].cost = this.price
      }
    })
  }
}
