// api/products.js

export const getProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  return res.json();
};

export const getAllCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  
  return res.json();
};

export const getProductsByCategory = async (category) => {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`);
  const data = await res.json();
  return data.products;
};


//'beauty', name: 'Beauty', url: 'https://dummyjson.com/products/category/beauty'}
//'fragrances', name: 'Fragrances', url: 'https://dummyjson.com/products/category/fragrances'}
//'furniture', name: 'Furniture', url: 'https://dummyjson.com/products/category/furniture'}
//'groceries', name: 'Groceries', url: 'https://dummyjson.com/products/category/groceries'}
//'home-decoration', name: 'Home Decoration', url: 'https://dummyjson.com/products/category/home-decoration'}
//'kitchen-accessories', name: 'Kitchen Accessories', url: 'https://dummyjson.com/products/category/kitchen-accessories'}
//'laptops', name: 'Laptops', url: 'https://dummyjson.com/products/category/laptops'}
//'mens-shirts', name: 'Mens Shirts', url: 'https://dummyjson.com/products/category/mens-shirts'}
//'mens-shoes', name: 'Mens Shoes', url: 'https://dummyjson.com/products/category/mens-shoes'}
//'mens-watches', name: 'Mens Watches', url: 'https://dummyjson.com/products/category/mens-watches'}
//'mobile-accessories', name: 'Mobile Accessories', url: 'https://dummyjson.com/products/category/mobile-accessories'}
//'motorcycle', name: 'Motorcycle', url: 'https://dummyjson.com/products/category/motorcycle'}
//'skin-care', name: 'Skin Care', url: 'https://dummyjson.com/products/category/skin-care'}
//'smartphones', name: 'Smartphones', url: 'https://dummyjson.com/products/category/smartphones'}
//'sports-accessories', name: 'Sports Accessories', url: 'https://dummyjson.com/products/category/sports-accessories'}
//'sunglasses', name: 'Sunglasses', url: 'https://dummyjson.com/products/category/sunglasses'}
//'tablets', name: 'Tablets', url: 'https://dummyjson.com/products/category/tablets'}
//'tops', name: 'Tops', url: 'https://dummyjson.com/products/category/tops'}
//'vehicle', name: 'Vehicle', url: 'https://dummyjson.com/products/category/vehicle'}
//'womens-bags', name: 'Womens Bags', url: 'https://dummyjson.com/products/category/womens-bags'}
//'womens-dresses', name: 'Womens Dresses', url: 'https://dummyjson.com/products/category/womens-dresses'}
//'womens-jewellery', name: 'Womens Jewellery', url: 'https://dummyjson.com/products/category/womens-jewellery'}
//'womens-shoes', name: 'Womens Shoes', url: 'https://dummyjson.com/products/category/womens-shoes'}
//'womens-watches', name: 'Womens Watches', url: 'https://dummyjson.com/products/category/womens-watches'}

