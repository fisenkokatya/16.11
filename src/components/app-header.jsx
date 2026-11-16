import {NavLink} from 'react-router-dom'

export function AppHeader() {
    return (
        <header className="p-4 bg-teal-500">
            <ul className="flex gap-4 text-white font-bold max-w-7xl mx-auto">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/favorites">Favorites</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart</NavLink>
                </li>
                <li>
                    <NavLink to="/orders">Orders</NavLink>
                </li>
                <li>
                    <NavLink to="/auth">Auth</NavLink>
                </li>
            </ul>
        </header>
    )
}
