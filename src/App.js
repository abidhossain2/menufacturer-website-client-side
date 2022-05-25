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
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payments/Payment'

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/bikeparts/:id' element={
          <ProtectedAuth>
            <Purchase></Purchase>
          </ProtectedAuth>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path='addreview' element={<AddReview></AddReview>}></Route>
            <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>
          </Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
        <ToastContainer/>
      </div>
  );
}

export default App;
