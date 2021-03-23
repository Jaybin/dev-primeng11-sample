
import { Component } from "@angular/core";
import { MessageService, SelectItem } from "primeng/api";
import { IProduct, ProductService } from "src/app/shared/services/product.service";

@Component({
  selector: 'app-table-edit-demo',
  templateUrl: 'table-edit-demo.component.html',
  styleUrls: ['table-edit-demo.component.css']
})
export class TableEditDemoComponent {
  products: IProduct[];
  statuses: SelectItem[];
  clonedProducts: { [s: string]: IProduct; } = {};

  constructor(private productSrv: ProductService, private messageService: MessageService) {}

  ngOnInit() {
    this.productSrv.getProductsSmall().then(data => this.products = data);

    this.statuses = [
      { label: 'In Stock', value: 'INSTOCK' },
      { label: 'Low Stock', value: 'LOWSTOCK' },
      { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];
  }

  onRowEditInit(product: IProduct) {
    this.clonedProducts[product.id] = { ...product };
  }

  onRowEditSave(product: IProduct) {
    if (this.isProductInvalid(product)) return; // Code and Name are compulsory
    if (this.isProductEdited(product)) {
      product.status = 'edited'; // Change status if product has been edited
      this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
    }
    if (product.price > 0) delete this.clonedProducts[product.id];
    else this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
  }

  onRowEditCancel(product: IProduct, index: number) {
    this.products[index] = this.clonedProducts[product.id];
    delete this.products[product.id];
  }

  isProductInvalid(product: IProduct) {
    return product.name.trim() === '' || product.price.toString().trim() === '';
  }

  isProductEdited(product: IProduct) {
    console.log(JSON.stringify(product));
    console.log(JSON.stringify(this.clonedProducts[product.id]));
    return JSON.stringify(product) !== JSON.stringify(this.clonedProducts[product.id]);
  }
}