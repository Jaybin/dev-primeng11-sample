import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('src/app/features/home/home.module')
    .then(m => m.HomeModule)
  },
  {
    path: 'picklist',
    loadChildren: () => import('src/app/features/picklist-demo/picklist-demo.module')
    .then(m => m.PicklistDemoModule)
  },
  {
    path: 'table-edit', loadChildren: () => import('src/app/features/table-edit-demo/table-edit-demo.module')
    .then(m => m.TableEditDemoModule)
  },
  {
    path: 'dropdown', loadChildren: () => import('src/app/features/dropdown-demo/dropdown-demo.module')
    .then(m => m.DropdownDemoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}