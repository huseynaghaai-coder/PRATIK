// LoginForm.jsx
import React, { useState } from 'react';

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Login Form</h2>
      <form>
        <div style={{ marginBottom: '15px' }}>
          <label>Email:</label><br />
          <input type="email" placeholder="Enter your email" required />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label><br />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={handleCheckboxChange}
            />
            Show Password
          </label>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;