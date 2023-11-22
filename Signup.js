import React, { useState } from "react";
import Registration from "./Registration";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    company: "",
  });
  console.log({formData});
  const [signin, setSigin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form submitted:", formData);
  // };

  const handlesignin = () => {
    setSigin(true);
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://snapkaro.com/eazyrooms_staging/api/user_registeration ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Your account created successfully");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Your account creation failed");
      }
      navigate("./Dashboard", { state: { responseData: formData } });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://snapkaro.com/eazyrooms_staging/api/userlogin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Signin successfully");
      } else {
        // Handle errors, e.g., show an error message
        console.error("Signin failed");
      }
      navigate("./Dashboard", { state: { responseData: formData } });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="section">
      <Registration />
      <div className="row1">
        <div className="signup-container">
          {!signin ? (
            <form className="signup-form" onSubmit={handleRegistration}>
              <h2 className="head">Sign Up</h2>
              <p class="paragraph">
                Already have an account?{" "}
                <span onClick={() => handlesignin()} className="signin">
                  <button className="signin-button">Sign In</button>
                </span>
              </p>
              <label>
                Full Name:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email Address:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Company:
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </label>
              <button type="submit" className="submit-button">Create your free account</button>
            </form>
          ) : (
            <form className="signup-form" onSubmit={handleLogin}>
              <h2 className="head">Sign In</h2>
              <label>
                Email Address:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <button type="submit" className="submit-button">Sign In</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
