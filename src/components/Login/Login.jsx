import React from "react"

export default function (props) {
  return (
    <div className="Login-form-container">
      <form className="Login-form">
        <div className="Login-form-content">
          <h3 className="Login-form-title">Login</h3>
          <div className="text-center">
              Please provide your credentials below
            </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
            />
          </div>
         
          <div className="d-grid gap-2 mt-3">
          
            <button type="submit" className="btn btn-primary">
              LOGIN
            </button>
            
          </div>
        </div>
      </form>
    </div>
  )
}
