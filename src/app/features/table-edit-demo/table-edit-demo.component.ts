
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

  /**
   * Creates an instance of TableEditDemoComponent
   * 
   * @param {ProductService} productSrv
   * @param {MessageService} messageService
   * @memberof TableEditDemoComponent
   */
  constructor(private productSrv: ProductService, private messageService: MessageService) {}

  /**
   * Angular's OnInit implementation
   *
   * @memberof TableEditDemoComponent
   */
  ngOnInit() {
    this.productSrv.getProductsSmall().then(data => this.products = data);
    this.statuses = [
      { label: 'In Stock', value: 'INSTOCK' },
      { label: 'Low Stock', value: 'LOWSTOCK' },
      { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];
  }

  /**
   * Creates a clone of the row when row edit is initialised
   *
   * @param {IProduct} product
   * @memberof TableEditDemoComponent
   */
  onRowEditInit(product: IProduct) {
    this.clonedProducts[product.id] = { ...product };
  }

  /**
   * Saves the row when row edit is finished and saved
   *
   * @param {IProduct} product
   * @return {*} 
   * @memberof TableEditDemoComponent
   */
  onRowEditSave(product: IProduct) {
    if (this.isProductInvalid(product)) return; // Code and Name are compulsory
    if (this.isProductEdited(product)) {
      product.status = 'edited'; // Change status if product has been edited
      this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
    }
    if (product.price > 0) delete this.clonedProducts[product.id];
    else this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
  }

  /**
   * Cancels the row edit operation and assigns the cloned copy of product to the index position
   *
   * @param {IProduct} product
   * @param {number} index
   * @memberof TableEditDemoComponent
   */
  onRowEditCancel(product: IProduct, index: number) {
    this.products[index] = this.clonedProducts[product.id];
    delete this.products[product.id];
  }

  /**
   * Checks validation of name and price field
   *
   * @param {IProduct} product
   * @return {boolean}
   * @memberof TableEditDemoComponent
   */
  isProductInvalid(product: IProduct): boolean {
    return product.name.trim() === '' || product.price.toString().trim() === '';
  }

  /**
   * Identifies whether the product was actually edited
   *
   * @param {IProduct} product
   * @return {boolean}
   * @memberof TableEditDemoComponent
   */
  isProductEdited(product: IProduct): boolean {
    return JSON.stringify(product) !== JSON.stringify(this.clonedProducts[product.id]);
  }
}