import { NavLink } from "react-router-dom";

function NavBar() {
  const setActiveClass = ({ isActive }) => (isActive ? "custom" : "custom2");
  return (
    <nav className="navBar">
      <span><i class="fa-solid fa-location-dot fa-2x"></i></span>
      <div>
        <NavLink className={ setActiveClass } to={"/" }>Home</NavLink>
        <span>  - </span>
        <NavLink className={ setActiveClass } to={"/Pokemones"}>Pokemones</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
