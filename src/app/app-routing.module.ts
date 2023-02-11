import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstalationKeyComponent } from './instalation-key/instalation-key.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WifiSelectorComponent } from './wifi-selector/wifi-selector.component';

// all routes names for the app
const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent},
  { path: 'wifiSel', component: WifiSelectorComponent},
  { path: 'instalKey', component: InstalationKeyComponent},
  { path: 'mainPage', component: MainPageComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
