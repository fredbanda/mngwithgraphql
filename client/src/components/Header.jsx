import { Link } from "react-router-dom"
import logo from './assets/logo.png'
export default function Header() {
  return (
  <Link to="/" className="text-decoration-none">       
    <nav className="navbar bg-light mb-4 p-0">
        <div className="container">
            <div className="navbar-brand" href="/">
                <div className="d-flex">
                  
                    <img src={logo} alt="logo" className="mr-2" />
                    <div className="text-primary fw-bold fs-4">PMEunny</div>
                    
                </div>
            </div>
        </div>
    </nav>
    </Link>
  )
}

