import { defineQuery } from "next-sanity";

// Query to fetch all products
export const allproducts = defineQuery(`
  *[_type == "product"]{
    _id,
    name,
    description,
    price,
    discountPercentage,
    "imageUrl": image.asset->url,
    stockLevel,
    category,
    isFeaturedProduct
  }
`);

// Query to fetch the first 4 products (Featured Products)
export const fourPro = defineQuery(`
  *[_type == "product"][0..3]{
    _id,
    name,
    description,
    price,
    discountPercentage,
    "imageUrl": image.asset->url,
    stockLevel,
    category,
    isFeaturedProduct
  }
`);
