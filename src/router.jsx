import {createBrowserRouter} from 'react-router-dom'
import {AppLayout} from './components/app-layout.jsx'
import {HomePage} from './pages/home.jsx'
import {FavoritesPage} from './pages/favorites.jsx'
import {CartPage} from './pages/cart.jsx'
import {OrdersPage} from './pages/orders.jsx'
import {AuthPage} from './pages/auth.jsx'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'favorites', element: <FavoritesPage /> },
            { path: 'cart', element: <CartPage /> },
            { path: 'orders', element: <OrdersPage /> },
            { path: 'auth', element: <AuthPage /> },
        ]
    }
])
