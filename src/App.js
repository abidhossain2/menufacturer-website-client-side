import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from './Pages/Home/Home';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Home></Home>
      </div>
    </QueryClientProvider>
  );
}

export default App;
