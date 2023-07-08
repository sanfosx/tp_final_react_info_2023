import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App.tsx'
import './index.css'
import Home from './pages/home/Home.js'
import Login from './pages/Auth/login/Login.js'
import Register from './pages/Auth/register/register.js'
import ProducstList from './pages/products/ProducstList.js'
import CategoriesList from './pages/categories/CategoriesList.js'
import ProductDetails from './pages/products/ProductDetails.js'
import CreateProduct from './pages/products/CreateProduct.js'
import EditProduct from './pages/products/EditProduct.js'
import CategoryDetails from './pages/categories/CategoryDetails.js'
import NotFound from './pages/NotFound/NotFound.js'
import Layout from './components/Layout/Layout.js'
import CreateCategory from './pages/categories/CreateCategory.js'
import EditCategory from './pages/categories/EditCategory.js'
import UsersList from './pages/Users/UsersList.js'
import UserDetails from './pages/Users/UserDetails.js'
import CreateUser from './pages/Users/CreateUser.js'
import EditUser from './pages/Users/EditUser.js'
import ShoppingCart from './pages/shoppingCart/ShoppingCart.js'
import AddressCheckout from './pages/Checkouts/AddressCheckout.js'
import ShippingCheckout from './pages/Checkouts/ShippingCheckout.js'
import PaymentCheckout from './pages/Checkouts/PaymentCheckout.js'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout></Layout>}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/products" element={<ProducstList />}></Route>
            <Route path="/products/create" element={<CreateProduct />}></Route>
            <Route path="/products/:id" element={<ProductDetails />}></Route>
            <Route path="/products/:id/edit" element={<EditProduct />}></Route>
            <Route path="/categories" element={<CategoriesList />}></Route>
            <Route path="/categories/create" element={<CreateCategory />}></Route>
            <Route path="/categories/:id/edit" element={<EditCategory />}></Route>
            <Route path="/categories/:id" element={<CategoryDetails />}></Route>
            <Route path="/categories/:id" element={<CategoryDetails />}></Route>
            <Route path="/users" element={<UsersList />}></Route>
            <Route path="/users/create" element={<CreateUser />}></Route>
            <Route path="/users/:id" element={<UserDetails />}></Route>
            <Route path="/users/:id/edit" element={<EditUser />}></Route>
            <Route path="/cart" element={<ShoppingCart />}></Route>
            <Route path="/checkout/address" element={<AddressCheckout />}></Route>
            <Route path="/checkout/shipping" element={<ShippingCheckout />}></Route>
            <Route path="/checkout/payment" element={<PaymentCheckout />}></Route>

            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
