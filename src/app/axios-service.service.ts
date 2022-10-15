import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class AxiosServiceService {
  // apiURL = 'https://electric-fan.herokuapp.com/api'
  apiURL = 'http://localhost:8080/api'
  constructor() { }

  async getTopSeller() {
    return await axios
      .get(`${this.apiURL}/best-sellers`)
      .then((res) => {
        return res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async getProduct(id: any) {
    return await axios.get(`${this.apiURL}/product/${id}`).then((res) => {
      return res.data.data
    }).catch((err) => {
      console.log(err);
    })
  }

  async addToCart(id: any) {
    return await axios.post(`${this.apiURL}/add-to-cart`, { productId: id }).then((res) => {
      return res.data.data
    }).catch((err) => {
      console.log(err);
    })
  }

  async getProductOnCart() {
    return await axios
      .get(`${this.apiURL}/cart`)
      .then((res) => {
        return res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async deleteProductFromCart(id: any) {
    return await axios.delete(`${this.apiURL}/delete-from-cart/${id}`).then((res) => {
    }).catch((err) => {
      console.log(err);
    })
  }
  async changeCount(id: any, count: any) {
    return await axios.put(`${this.apiURL}/change-count/${id}`, count).then((res) => {
    }).catch((err) => {
      console.log(err);
    })
  }

  async getCount(id: any) {
    return await axios.get(`${this.apiURL}/getSingleItemOnCart`).then((res) => {
      return res.data.data
    }).catch((err) => {
      console.log(err);
    })
  }

  async getTotalPrice() {
    return await axios
      .get(`${this.apiURL}/cart`)
      .then((res) => {
        return res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async getAllDiscountCode() {
    return await axios
      .get(`${this.apiURL}/discount`)
      .then((res) => {
        return res.data.data
      }).catch((err) => {
        console.log(err)
      })
  }

  async discountCode(event: any) {
    return await axios
      .get(`${this.apiURL}/discount/${event.target.value}`)
      .then((res) => {
        return res.data.data
      }).catch((err) => {
        console.log(err);
      })
  }

  async getCommentData(id: any) {
    return await axios.get(`${this.apiURL}/getComment/${id}`).then((res) => {
      return res.data.data
    }).catch((err) => {
      console.log(err);
    })
  }

  async sendComment(id: any, comment: any) {
    return await axios.post(`${this.apiURL}/comments/${id}`, comment).then((res) => {
    }).catch((err) => {
      console.log(err);
    });
  }

  async deleteComment(id: any) {
    return await axios.delete(`${this.apiURL}/delete-comment/${id}`).then((res) => {

    })
      .catch((err) => {
        console.log(err);
      });
  }

  async getAllFaqs() {
    return await axios.get(`${this.apiURL}/faq`).then((res) => {
      return res.data.data
    }).catch((err) => {
      console.log(err);
    })
  }

  async getAllProduct() {
    return await axios
      .get(`${this.apiURL}/products`)
      .then((res) => {
        return res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async getAllProductSortBy(sort: any) {
    return await axios
      .get(`${this.apiURL}/category/${sort}`)
      .then((res) => {
        return res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async productDetails(id: any) {
    return await axios.get(`${this.apiURL}/product/${id}`).then((res) => {
      return res.data.data
    }).catch((err) => {
      console.log(err);
    })
  }

  async getCategory() {
    return await axios
      .get(`${this.apiURL}/category`)
      .then((res) => {
        return res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async chooseCategory(category: any, sort: any) {
    return await axios
      .get(`${this.apiURL}/category/${category}/${sort}`)
      .then((res) => {
        return res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async aboutPrice(fromto: any, sort: any) {
    return await axios
      .get(`${this.apiURL}/price/${fromto}/${sort}`)
      .then((res) => {
        return res.data.data
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // async sortBy(value: any) {
  //   return await axios
  //     .get(`${this.apiURL}/sort/${value}`)
  //     .then((res) => {
  //       return res.data.data
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  async deleteProduct(id: any) {
    return await axios
      .delete(`${this.apiURL}/delete-product/${id}`)
      .then((res) => {

      })
      .catch((err) => {
        console.log(err);
      });
  }

  async productSubmit(data: any) {
    return await axios
      .post(`${this.apiURL}/create-product`, data)
      .then((res) => {
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async updateProduct(id: any, data: any) {
    return await axios.put(`${this.apiURL}/update-product/${id}`, data).then((res) => {
    }).catch((err) => {
      console.log(err)
    })
  }
}
