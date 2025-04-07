import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // styles below

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Attempt:', { email, password });
    // handle login logic here
  };

  return (
    <div className="login-page">
      <div className="sparkle-background"></div>

      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="card p-4 login-card">
          <h2 className="text-center mb-4 glowing-title">Shopping Simplify</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-100">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
