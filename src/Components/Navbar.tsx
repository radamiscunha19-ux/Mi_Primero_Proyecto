import '../StyleCss/Navbar.css'

export default function Navbar() {
  return (
    <div className="container">
    <nav className="BarraNave"> 
        <div className="d-logo"> 
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Logo" className="logo" />
        <h1>My App</h1>
        </div>
        <div>
        <input type="text" placeholder="Search..." />
        <button>Search</button>
        </div>
    </nav>
    </div>
  )
};