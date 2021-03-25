import { Component, OnInit } from "@angular/core";
import { SelectItem } from "primeng/api";
import { IProduct, ProductService } from "src/app/shared/services/product.service";

const DEFAULT_PLACEHOLDER = 'Select inventory status first';
const CATEGORY_PLACEHOLDER = "Select a category";
const NAME_PLACEHOLDER = "Select a name";

@Component({
  selector: 'app-dropdown-demo',
  templateUrl: 'dropdown-demo.component.html',
  styleUrls: ['dropdown-demo.component.css']
})
export class DropdownDemoComponent implements OnInit {
  products: IProduct[];
  inventoryStatuses: SelectItem[] = [];
  categories: SelectItem[] = [];
  names: SelectItem[] = [];
  inventoryStatus: string;
  category: string;
  name: string;
  product: IProduct;
  categoryPlaceholder: string = DEFAULT_PLACEHOLDER;
  namePlaceholder: string = DEFAULT_PLACEHOLDER;

  /**
   * Creates an instance of DropdownDemoComponent
   * 
   * @param {ProductService} productSrv
   * @memberof DropdownDemoComponent
   */
  constructor(private productSrv: ProductService) {}

  /**
   * Angular's OnInit implementation
   *
   * @memberof DropdownDemoComponent
   */
  ngOnInit() {
    this.productSrv.getProductsSmall().then(data => this.products = data);
    this.inventoryStatuses = [
      { label: 'In Stock', value: 'INSTOCK' },
      { label: 'Low Stock', value: 'LOWSTOCK' },
      { label: 'Out of Stock', value: 'OUTOFSTOCK' }
    ];
  }

  /**
   * Generates unique product categories based on the selected inventory status
   *
   * @memberof DropdownDemoComponent
   */
  generateCategories() {
    this.category = this.name = this.product = null;
    this.names = [];
    const categories = this.products.filter(product => product.inventoryStatus === this.inventoryStatus)
    .map(product => { return { label: product.category, value: product.category }; });
    this.categories = [ ...new Set(categories) ];
    this.categoryPlaceholder = CATEGORY_PLACEHOLDER;
  }

  /**
   * Generates product names based on the selected inventory status and category
   *
   * @memberof DropdownDemoComponent
   */
  generateNames() {
    this.name = this.product = null;
    const names = this.products.filter(product => product.inventoryStatus === this.inventoryStatus && product.category === this.category)
    .map(product => { return { label: product.name, value: product.name }; });
    this.names = [ ...new Set(names) ];
    this.namePlaceholder = NAME_PLACEHOLDER;
  }

  /**
   * Identifies the product from the original list of products based on the selected inventory status, category and name 
   *
   * @memberof DropdownDemoComponent
   */
  identifyProduct() {
    this.product = this.products.find(product => product.name === this.name);
  }
}