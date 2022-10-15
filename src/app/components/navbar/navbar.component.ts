import { AxiosServiceService } from 'src/app/axios-service.service';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  fans: any
  cart: any
  category: any
  constructor(private service: AxiosServiceService) {
  }

  ngOnInit() {
    this.getAllProduct()
  }

  getAllProduct() {
    this.service.getAllProduct().then((res) => {
      this.fans = res
    })
  }

}
