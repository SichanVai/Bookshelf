import {Outlet,  Link } from "react-router-dom";
const Header =() =>{ 
    return (
      <>
      <ul className="menu bg-base-200 rounded-box w-56">
  <li>
    <h2 className="menu-title">Bookshelf</h2>
    <ul>
    <li><Link to='/Dashboard'>Dashboard</Link></li>
    <li><Link to='/current-reading'>Reading List</Link></li>
    <li><Link to='/already-read'>Already Read</Link></li>
    </ul>
  </li>
<li>
  <div className="navbar bg-base-100">
    <div className="flex-none gap-2">
      <div className="dropdown dropdown-start">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-auto p-2 shadow">
          <li>
            <a className="justify-between">
              Profile 
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><Link to='/signin'>Logout</Link></li>
        </ul>
      </div>
    </div>
  </div>
</li>

</ul>
  
            <Outlet />  
            </>
    )
}











export default Header;