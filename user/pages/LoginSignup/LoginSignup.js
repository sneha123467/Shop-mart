import React, { useState } from 'react';
import './LoginSignup.css';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const mockApiCall = (data) => {
    console.log('Mock API Call with data:', data); // Added logging
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate API response based on some condition
        if (data.email === "abc@gmail.com") {
          reject("Simulated API failure");
        } else {
          resolve("Form submitted successfully");
        }
      }, 2000);
    });
  };

  const handleSubmit = async () => {
    let valid = true;
    const newErrors = { name: "", email: "", password: "" };

    if (action !== "Login" && name.trim() === "") {
      newErrors.name = "Enter name";
      valid = false;
    }

    if (email.trim() === "") {
      newErrors.email = "Enter email address";
      valid = false;
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Enter valid email address";
      valid = false;
    }

    if (password.trim() === "") {
      newErrors.password = "Enter password";
      valid = false;
    } else if (password.trim().length < 8) {
      newErrors.password = "Password should be minimum 8 characters";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setSubmitted(true);
      try {
        const response = await mockApiCall({ name, email, password });
        setMessage(response);
        navigate('/adminDashboard'); // Redirect to admin page after successful submission
      } catch (error) {
        setMessage("Form submission failed");
        navigate('/adminHome');
      }
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{action}</h1>
        <div className='loginsignup-fields'>
          {action === "Login" ? null : (
            <>
              <input
                type='text'
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder='Your Name'
              />
              {errors.name && <span className="input-text-danger">{errors.name}</span>}
            </>
          )}
          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <span className="input-text-danger">{errors.email}</span>}
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder='Password'
          />
          {errors.password && <span className="input-text-danger">{errors.password}</span>}
        </div>

        <div className='loginsignup-btn'>
          <button onClick={handleSubmit} disabled={submitted}>Continue as Admin</button>
          <button onClick={handleSubmit} disabled={submitted}>Continue as User</button>
        </div>

        {action === "Login" ? (
          <p className='loginsignup-login'>
            Don't have an account? <span onClick={() => setAction("Sign Up")}>Sign Up Here!</span>
          </p>
        ) : (
          <p className='loginsignup-login'>
            Already have an account? <span onClick={() => setAction("Login")}>Login Here!</span>
          </p>
        )}

        <div className='loginsignup-agree'>
          <input type='checkbox' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
};

export default LoginSignup;
