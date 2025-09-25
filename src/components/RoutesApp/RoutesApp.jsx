import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home.jsx';
import Products from '../Pages/Products.jsx';
import Login from '../Pages/Login.jsx';
import Signup from '../Pages/Signup.jsx';
import About from '../Pages/About.jsx';
import ProductDetails from '../Product/ProductDetails.jsx';
import Categories from '../Categories/Categories.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import { PATHS } from '../../constants/app.js';
const RoutesApp = ({ login, signup }) => {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<Home />} />
      <Route path={PATHS.PRODUCTS} element={<Products />} />
      <Route path={PATHS.LOGIN} element={<Login login={login}/>} />
      <Route path={PATHS.SIGNUP} element={<Signup signup={signup}/>} />
      <Route path={PATHS.ABOUT}element={<About />} />
      <Route path={PATHS.PRODUCT_DETAILS} element={<ProductDetails />} />
      <Route path={PATHS.CATEGORIES} element={<Categories />} />
      <Route path={PATHS.NOT_FOUND} element={<h1>404 Not Found</h1>} />
      <Route element={<PrivateRoute />}>
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Route>
    </Routes>
  )
}

export default RoutesApp;