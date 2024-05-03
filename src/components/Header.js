function Header() {
  return (
    <header>
      <div className="container flex justify-between">
        <h1>StarCineplex</h1>
        <nav>
          <ul className="flex gap-2">
            <li>Showtimes</li>
            <li>Tickets</li>
            <li>Contact</li>
          </ul>
        </nav>  
      </div>
    </header>
  )
}

export default Header;