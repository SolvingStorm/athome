import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { ContentComponent } from 'app/content/content.component';

export const AppRoutes: Routes = [
    //{ path: 'calc', component: CalcComponent }
    { path: '', component: ContentComponent },
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);