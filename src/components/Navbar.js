function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <h1>DeMOSEC</h1>
      </div>
      <div className="right">
        <label for="check" className="checkBtn">
          <i className="fa fa-bars"></i>
        </label>
        <ul className="list">
          <li><a href="#">Ticket</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
    );
}

export default Navbar;