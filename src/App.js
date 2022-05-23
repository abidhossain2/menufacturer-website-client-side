import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Purchase from './Pages/Purchase/Purchase';
import SignIn from './Pages/Authentication/Signin/SignIn';
import Register from './Pages/Authentication/Register/Register';
import ProtectedAuth from './Pages/Authentication/ProtectedAuth/ProtectedAuth';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/bikeparts/:id' element={
          <ProtectedAuth>
            <Purchase></Purchase>
          </ProtectedAuth>}></Route>
          <Route path='/signin' element={<SignIn></SignIn>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
