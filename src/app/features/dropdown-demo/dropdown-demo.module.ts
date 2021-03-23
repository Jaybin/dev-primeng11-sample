import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ProductService } from "src/app/shared/services/product.service";
import { SharedModule } from "src/app/shared/shared.module";
import { DropdownDemoComponent } from './dropdown-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: DropdownDemoComponent
      }
    ])
  ],
  declarations: [DropdownDemoComponent],
  exports: [DropdownDemoComponent],
  providers: [ProductService]
})
export class DropdownDemoModule {}