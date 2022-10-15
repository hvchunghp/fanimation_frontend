import { SitemapComponent } from './components/sitemap/sitemap.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { MaintenancePolicyComponent } from './components/maintenance-policy/maintenance-policy.component';
import { ReturnPolicyComponent } from './components/return-policy/return-policy.component';
import { ShippingPolicyComponent } from './components/shipping-policy/shipping-policy.component';
import { FAQComponent } from './components/faq/faq.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { ShoppingGuideComponent } from './components/shopping-guide/shopping-guide.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateComponent } from './admin/update/update.component';
import { ReadComponent } from './admin/read/read.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'Fanimation'
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    title: 'Product details'
  },
  {
    path: 'admin/products',
    component: ReadComponent,
    title: 'Manage Products',
  },
  {
    path: 'admin/products/:id',
    component: UpdateComponent,
    title: 'Manage Products',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Products',
  },
  {
    path: 'products/:category',
    component: ProductsComponent,
    title: 'Products',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart',
  },
  {
    path: 'order-success',
    component: OrderSuccessComponent,
    title: 'Thank you'
  },
  {
    path: 'about',
    component: AboutUsComponent,
    title: 'About us'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact'
  },
  {
    path: 'shopping-guide',
    component: ShoppingGuideComponent,
    title: 'Shopping guide'
  },
  {
    path: 'payment-method',
    component: PaymentMethodComponent,
    title: 'Payment method'
  },
  {
    path: 'FAQ',
    component: FAQComponent,
    title: 'FAQ'
  },
  {
    path: 'shipping-policy',
    component: ShippingPolicyComponent,
    title: 'Shipping Policy'
  },
  {
    path: 'return-policy',
    component: ReturnPolicyComponent,
    title: 'Return Policy'
  },
  {
    path: 'maintenance-policy',
    component: MaintenancePolicyComponent,
    title: 'Maintenance Policy'
  },
  {
    path: 'promotion',
    component: PromotionComponent,
    title: 'Promotion'
  },
  {
    path: 'sitemap',
    component: SitemapComponent,
    title: 'Sitemap'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
