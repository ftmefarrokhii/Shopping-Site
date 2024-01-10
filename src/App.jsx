import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppLayout from './ui/AppLayout'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import ProductsPage from './pages/ProductsPage'
import ThemeProvider from './context/ThemeProvider'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import BackToUp from './utils/BackToUp'
import { useEffect } from 'react'
import SingleProductPage from './pages/SingleProductPage'
import CartPage from './pages/CartPage'
import CartProvider from './context/CartProvider'

const queryClient = new QueryClient()

function App() {
  const location = useLocation();
  useEffect(() => BackToUp(), [location]);
  
  return(
    <ThemeProvider>
        <QueryClientProvider client={queryClient}>
      <CartProvider>
          <Routes>
            <Route path='/' element={<AppLayout><HomePage /></AppLayout>} />
            <Route path='/*' element={<NotFound />} />
            <Route path='/categories/:category' element={<AppLayout><ProductsPage /></AppLayout>} />
            <Route path='/SignUp' element={<SignupPage />} />
            <Route path='/Login' element={<LoginPage />} />
            <Route path='/product/:id' element={<AppLayout><SingleProductPage /></AppLayout>} />
            <Route path='/cart' element={<AppLayout><CartPage /></AppLayout>} />
          </Routes>
      </CartProvider>
        </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
