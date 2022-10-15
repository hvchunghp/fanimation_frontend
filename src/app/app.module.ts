import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './admin/read/read.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { UpdateComponent } from './admin/update/update.component';
import { HeaderComponent } from './admin/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgSelectModule } from '@ng-select/ng-select';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CommentComponent } from './components/comment/comment.component';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { ShoppingGuideComponent } from './components/shopping-guide/shopping-guide.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { FAQComponent } from './components/faq/faq.component';
import { ShippingPolicyComponent } from './components/shipping-policy/shipping-policy.component';
import { ReturnPolicyComponent } from './components/return-policy/return-policy.component';
import { MaintenancePolicyComponent } from './components/maintenance-policy/maintenance-policy.component';
import { PromotionComponent } from './components/promotion/promotion.component';
import { ClipboardModule } from 'ngx-clipboard';
import { SitemapComponent } from './components/sitemap/sitemap.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    UpdateComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    HomePageComponent,
    ProductDetailsComponent,
    CommentComponent,
    ErrorComponent,
    LoadingComponent,
    ProductsComponent,
    CartComponent,
    OrderSuccessComponent,
    AboutUsComponent,
    ContactComponent,
    ShoppingGuideComponent,
    PaymentMethodComponent,
    FAQComponent,
    ShippingPolicyComponent,
    ReturnPolicyComponent,
    MaintenancePolicyComponent,
    PromotionComponent,
    SitemapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularToastifyModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgSelectModule,
    CKEditorModule,
    ClipboardModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent],
})
export class AppModule { }
