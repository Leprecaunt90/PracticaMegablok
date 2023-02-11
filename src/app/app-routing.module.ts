import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstalationKeyComponent } from './instalation-key/instalation-key.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WifiSelectorComponent } from './wifi-selector/wifi-selector.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'wifiSel', component: WifiSelectorComponent},
  { path: 'InstalKey', component: InstalationKeyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
