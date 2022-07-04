import "./navbar.css"

const Navbar = () => {
  return (
    <div className="home">
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">Healing Yuk</span>
          <div className="navItems">
            <button className="navButton">
              Register
            </button>
            <button className="navButton">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default Navbar