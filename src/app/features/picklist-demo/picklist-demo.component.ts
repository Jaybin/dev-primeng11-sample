import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IProduct, ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-picklist-demo',
  templateUrl: './picklist-demo.component.html',
  styleUrls: ['./picklist-demo.component.scss']
})
export class PicklistDemoComponent implements OnInit {

  constructor(private productSrv: ProductService, private messageSrv: MessageService) {}

  ngOnInit(): void {
    this.productSrv.getProductsSmall()
    .then(products => {
      this.allProducts = products;
      const categories = products.map(p => p.category);
      this.categories = [ ...new Set(categories) ].sort();
      if (this.categories.length) {
        this.category = this.categories[0];
        this.onClickCategory(this.category);
      }
    });
    this.targetProducts = [];
  }

  category: string;

  categories: string[] = [];

  allProducts: IProduct[];

  sourceProducts: IProduct[];
    
  targetProducts: IProduct[];

  onClickCategory(category: string) {
    this.category = category;
    this.sourceProducts =
    this.allProducts.filter(p => {
      const existsInTarget = this.targetProducts.some(tp => tp.id === p.id);
      return !existsInTarget && p.category === category;
    });
  }

  moveToSource(e: any) {
    this.checkValidMove(e.items);
  }

  moveAllToSource(e: any) {
    this.checkValidMove(e.items);
  }

  private checkValidMove(items: IProduct[]) {
    const invalidItems: IProduct[] =
    items.filter(item => item.category !== this.category);
    const invalidItemIds = invalidItems.map(item => item.id);
    this.sourceProducts =
    this.sourceProducts.filter(p => invalidItemIds.indexOf(p.id) === -1);
    this.targetProducts = invalidItems;
    if (invalidItems.length) {
      const str = `Cannot push ${invalidItemIds.join()} since they belong to a different category.`
      this.messageSrv.add(
        {
          key: 'picklistKey', severity:'error', summary: 'Error', detail: str
        }
      );
    }
  }
}
