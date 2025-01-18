import { createClient } from '@sanity/client';
import axios from 'axios';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31',
});

// Upload image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(),
    });
    console.log(`Image uploaded successfully: ${asset._id}`);
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

// Import data from API and upload to Sanity
async function importData() {
  try {
    console.log('Fetching products from API...');
    const response = await axios.get('https://template-0-beta.vercel.app/api/product');
    const products = response.data;
    console.log(`Fetched ${products.length} products`);

    for (const product of products) {
      console.log(`Processing product: ${product.name}`);

      // Fetch the category from Sanity or create if it doesn't exist
      const categoryDoc = await client.fetch('*[_type == "category" && name == $name][0]', {
        name: product.category || 'Uncategorized',
      });

      const categoryRef = categoryDoc || await client.create({
        _type: 'category',
        name: product.category || 'Uncategorized',
      });

      let imageRef = null;
      if (product.imagePath) {
        imageRef = await uploadImageToSanity(product.imagePath);
      }

      const sanityProduct = {
        _type: 'product', // Fixed document type
        id: product.id,
        name: product.name,
        image: imageRef,
        price: parseFloat(product.price),
        description: product.description || 'No description provided',
        discountPercentage: product.discountPercentage || 0,
        isFeaturedProduct: product.isFeaturedProduct || false,
        stockLevel: product.stockLevel || 0,
        category: {
          _type: 'reference',
          _ref: categoryRef._id, // Reference to the category document
        },
      };

      console.log('Uploading product to Sanity:', sanityProduct.name);
      const result = await client.create(sanityProduct);
      console.log(`Product uploaded successfully: ${result._id}`);
    }

    console.log('Data import completed successfully!');
  } catch (error) {
    console.error('Error importing data:', error);
  }
}

// Call the import function
importData();
