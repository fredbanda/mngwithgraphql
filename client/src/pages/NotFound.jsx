import { FaExclamationTriangle } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      <FaExclamationTriangle className="text-danger" size="5em" />
      <h1>404</h1>
      <p className="lead mx-3 fs-3 fw-bold">Sorry, this page does not exist!</p>
      <Link to="/" className="btn btn-secondary w-25">Go Home</Link>
    </div>
  )
}