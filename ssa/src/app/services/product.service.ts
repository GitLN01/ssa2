import { Injectable } from '@angular/core';

// dodaje se:
import { Product } from '../model/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // dodaje se:
  readonly url = 'http://localhost:3000/products'
  constructor() { }

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.url)
    return await data.json()
  }
  async getById(id:number): Promise<Product[]> {
    const data = await fetch(this.url+'/'+id)
    return await data.json()
  }
}
