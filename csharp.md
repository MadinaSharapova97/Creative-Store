ecommerce-app/
│
├── public/               # Statik fayllar
├── src/
│   ├── api/              # API chaqiriqlar
│   │   ├── products.js
│   │   ├── auth.js
│   │   └── cart.js
│   │
│   ├── components/       # Umumiy komponentlar
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── Loader.jsx
│   │
│   ├── pages/            # Sahifalar
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── Checkout.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── Profile.jsx
│   │
│   ├── admin/            # Admin panel sahifalari
│   │   ├── Dashboard.jsx
│   │   ├── ManageProducts.jsx
│   │   ├── ManageOrders.jsx
│   │   └── ManageUsers.jsx
│   │
│   ├── context/          # Global state (Cart, Auth)
│   │   ├── CartContext.jsx
│   │   └── AuthContext.jsx
│   │
│   ├── App.jsx           # Asosiy app
│   ├── main.jsx          # ReactDOM render
│   └── index.css         # Tailwind CSS
│
├── package.json
└── tailwind.config.js
