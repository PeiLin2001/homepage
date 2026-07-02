import { Routes } from '@angular/router';
import { HomepageComponent } from './@components/homepage/homepage.component';
import { AboutComponent } from './@components/about/about.component';
import { WorksComponent } from './@components/works/works.component';
import { WritingComponent } from './@components/writing/writing.component';
import { ContactComponent } from './@components/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'works',
    component: WorksComponent
  },
  {
    path: 'writing',
    component: WritingComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];
