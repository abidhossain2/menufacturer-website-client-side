import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/bikeparts/:id' element={<Purchase></Purchase>}></Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
