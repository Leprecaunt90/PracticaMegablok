import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

const  appRoutes = [
  { path: 'Welcom', component: WelcomeComponent},
];
export const Routing = RouterModule.forRoot(appRoutes);