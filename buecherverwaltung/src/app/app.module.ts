import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonLinkComponent } from './components/button-link/button-link.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { ButtonComponent } from './components/button/button.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { BookNewComponent } from './pages/book-new/book-new.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    IndexComponent,
    LoginComponent,
    ButtonLinkComponent,
    RegisterComponent,
    TermsOfUseComponent,
    PrivacyComponent,
    ImprintComponent,
    ButtonComponent,
    CatalogComponent,
    BookNewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
