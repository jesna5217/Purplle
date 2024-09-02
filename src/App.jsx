
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom';
import Carts from './pages/Carts';

function App() {
  const location = useLocation();

  // Show header on all routes except the Cart page
  const showHeader = location.pathname !== '/cart';

  return (
  <>
   {/* <Header/> */}
   {showHeader && <Header />}  {/* Conditionally render the Header */}
<Routes>
  <Route element={<Home/>} path ='/'/>
  <Route element={<Carts/>} path ='/cart'/>

</Routes>
<Footer/>
    </>
  )
}

export default App
