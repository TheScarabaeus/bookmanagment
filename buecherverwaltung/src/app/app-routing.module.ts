import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { BookNewComponent } from './pages/book-new/book-new.component';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'newBook',
    component: BookNewComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'terms-of-use', component: TermsOfUseComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'imprint', component: ImprintComponent },
  { path: '', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
