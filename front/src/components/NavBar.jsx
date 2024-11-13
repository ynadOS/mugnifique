import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

function NavBar() {

    const [items, setItems] = useState()
    const [totalPrice, setTotalPrice] = useState(null)

    useEffect(() => {
        setItems(() => {
            let totalItems = 0
            JSON.parse(localStorage.getItem('cart')).forEach(element => {
                totalItems += element.quantity;
            });

            return totalItems;
        })

        setTotalPrice(() => {
            let price = 0
            JSON.parse(localStorage.getItem('cart')).forEach(element => {
                price += element.price * element.quantity;
            });

            return price;
        })
    },[items])

    return (
      <>
       <div className="navbar bg-base-100 justify-between">
            <div className="">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Mugnifique</a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><NavLink to='/'>Accueil</NavLink></li>
                <li><NavLink to='/products'>Produits</NavLink></li>
                {/* <li>
                    <details>
                    <summary>Parent</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </details>
                </li> */}
                <li><NavLink to='/contact'>Contact</NavLink></li>
                <li><NavLink to='/admin'>Tableau de bord</NavLink></li>
                </ul>
            </div>

            <div className="flex-none">
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm indicator-item">{items}</span>
                    </div>
                </div>
                <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                    <div className="card-body">
                    <span className="text-lg font-bold">{items} articles</span>
                    <span className="text-info">Prix Total: {totalPrice} €</span>
                    <div className="card-actions">
                        <NavLink to='/cart' className="btn btn-primary btn-block">View cart</NavLink>
                    </div>
                    </div>
                </div>
                </div>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>

                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default NavBar
  

