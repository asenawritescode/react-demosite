function TopNav() {
  return (
    <nav class="navbar">
      <div class="left">
        <h1>DeMOSEC</h1>
      </div>
      <div class="right">
        <label for="check" class="checkBtn">
          <i class="fa fa-bars"></i>
        </label>
        <ul class="list">
          <li><a href="#">Branch</a></li>
          <li><a href="#">Ticket</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>);
}

export default TopNav;