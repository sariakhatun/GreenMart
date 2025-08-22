🛍️ My Shop (GreenMart) – Next.js 15 + NextAuth

A simple e-commerce demo built with Next.js 15 (App Router) and NextAuth.js.
The app includes public pages (landing, product list, product details) and protected pages (dashboard with add product functionality).

🚀 Features

Landing Page (/)

Navbar, Hero, Product Highlights, Footer

Navigation to login and products

Authentication with NextAuth (/login)

Credential login (or extend with Google OAuth)

Redirects to /products after successful login

Products List (/products)

Publicly accessible

Loads products from services.json (mock data)

Each product shows: name, description, price, details button

Product Details (/products/[id])

Displays full details of a product

Publicly accessible

Protected Dashboard (/dashboard/add-product)

Only accessible to authenticated users

Form to add a new product (stored in DB / mock backend)

Redirects unauthenticated users to /login

🛠️ Tech Stack

Next.js 15 (App Router)

NextAuth.js (Credentials / Social login)

Tailwind CSS for styling

MongoDB (or mock JSON) for product storage

Deployed on Vercel

⚙️ Installation & Setup

Clone repo:

git clone https://github.com/sariakhatun/GreenMart

cd <your-repo>


Install dependencies:

npm install


Setup environment variables (.env.local):

NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
MONGODB_URI=your-mongodb-uri


Run dev server:

npm run dev


Build for production:

npm run build
npm start


Deploy to Vercel:

vercel --prod

📂 Route Summary
Route	Access	Description
/	Public	Landing page with navbar, hero, product highlights, footer
/login	Public	NextAuth login page (credentials / Google)
/products	Public	Product list with name, description, price
/products/[id]	Public	Product details page
/dashboard/add-product	Protected	Add new product (requires login)
/api/auth/[...nextauth]	Public	NextAuth route handler
/api/products	Protected (POST)	Add product via API

🔗 Deployment Links

GitHub Repo: https://github.com/sariakhatun/GreenMart

Live (Vercel): https://yes-kj13hggvn-sariakhatuns-projects.vercel.app/