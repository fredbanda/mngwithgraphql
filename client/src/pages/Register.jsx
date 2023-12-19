import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    async function submit(e) {
        e.preventDefault();
        console.log("clicked now");

        try{
            await axios.post('http://locaalhost:5000/signup', {
                email,
                password
            })
        }catch(e){
            console.log(e)
        }
    }

  return (
    <div className="login">
      <h1 className="text-center">Login</h1>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3"></i>
                          <span className="h1 fw-bold mb-0 text-center rounded mx-auto">
                            <img 
                            src="/logo.png" 
                            alt="logo"
                            width={100}
                            height={100}
                            className="rounded-circle shadow-1-strong text-center"
                            />
                          </span>
                        </div>

                        <h5 className="fw-normal mb-3 pb-3 text-center">
                          Sign into your account
                        </h5>

                        <div className="form-outline mb-4">
                          <label className="form-label">
                            Your Name
                          </label>
                          <input
                            type="name"
                            id="name"
                            onChange={(e) => {setName(e.target.value)}}                            
                            className="form-control form-control-lg"
                            
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label">
                            Email address
                          </label>
                          <input
                            type="email"
                            id="email"
                            onChange={(e) => {setEmail(e.target.value)}}                            
                            className="form-control form-control-lg"
                            
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            onChange={(e) => {setPassword(e.target.value)}}
                            className="form-control form-control-lg"
                            autoComplete="true"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <label className="form-label">
                            Password Confirmation
                          </label>
                          <input
                            type="password"
                            id="passwordConfirmation"
                            onChange={(e) => {setPasswordConfirmation(e.target.value)}}
                            className="form-control form-control-lg"
                            autoComplete="true"
                          />
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block w-100"
                            type="submit"
                            onClick={submit}
                          >
                            Login
                          </button>
                        </div>
                        <p className="mb-5 pb-lg-2 text-center ">
                          Don't have an account?{" "}
                          <Link to="/login" className="text-decoration-none">Login here</Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
