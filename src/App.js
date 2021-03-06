import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Purchase from './Pages/Purchase/Purchase';
import SignIn from './Pages/Authentication/Signin/SignIn';
import Register from './Pages/Authentication/Register/Register';
import ProtectedAuth from './Pages/Authentication/ProtectedAuth/ProtectedAuth';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MyProfile from './Pages/Dashboard/Dashboard/MyProfile/MyProfile';
import Payment from './Pages/Dashboard/Payments/Payment'
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import useAdmin from './CustomHook/useAdmin';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';
import AllUser from './Pages/Dashboard/AllUser/AllUser';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders';
import Blogs from './Pages/OpenFolder/Blogs';
import MyPortfolio from './Pages/OpenFolder/MyPortfolio';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/bikeparts/:id' element={
          <ProtectedAuth>
            <Purchase></Purchase>
          </ProtectedAuth>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            {admin ? <Route index element={<AddProduct></AddProduct>}></Route> :
            <Route index element={<MyOrders></MyOrders>}></Route>}
            {admin ? <Route path='manageproducts' element={<ManageProduct></ManageProduct>}></Route> :
            <Route path='addreview' element={<AddReview></AddReview>}></Route>}
            {admin && <Route path='users' element={<AllUser></AllUser>}></Route>}
            {admin && <Route path='manageorders' element={<ManageOrders></ManageOrders>}></Route>}
            <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>
          </Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/myportfolio' element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <ToastContainer/>
      </div>
  );
}

export default App;
