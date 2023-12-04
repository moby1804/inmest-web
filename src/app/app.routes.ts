import { Routes } from '@angular/router';
import { DashboardComponent } from './main-features/dashboard/dashboard.component';
import { UserComponent } from './main-features/user/user.component';

export const routes: Routes = [
{path: '',
component: DashboardComponent,
},

{path: 'user',
component: UserComponent,
},


];
