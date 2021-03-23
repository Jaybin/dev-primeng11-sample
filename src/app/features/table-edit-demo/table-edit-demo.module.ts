import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MessageService } from "primeng/api";
import { ProductService } from "src/app/shared/services/product.service";
import { SharedModule } from "src/app/shared/shared.module";
import { TableEditDemoComponent } from './table-edit-demo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: TableEditDemoComponent
      }
    ])
  ],
  declarations: [TableEditDemoComponent],
  exports: [TableEditDemoComponent],
  providers: [
    ProductService,
    MessageService
  ]
})
export class TableEditDemoModule {}