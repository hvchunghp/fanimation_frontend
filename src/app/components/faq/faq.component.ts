import { AxiosServiceService } from 'src/app/axios-service.service';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {
  faq: any;
  constructor(private service: AxiosServiceService) { }

  ngOnInit(): void {
    this.getAllFaqs()
  }
  getAllFaqs() {
    this.service.getAllFaqs().then((res) => {
      this.faq = res;
    })
  }
}
