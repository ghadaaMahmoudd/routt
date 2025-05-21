// export interface Product {
//     quantity: number;
//     id: number;
//     name: string;
//     price: number;
//     image: string;
//     colors: string[];
//     description: string;
//     type: string;
//   }





export interface Product {
  $id?: number;
  productName: string;
  brand_name: string;
  category : string;
  price: number;
  quantity: number;
  rank: number;
  date: string;
  logo?: string;
}