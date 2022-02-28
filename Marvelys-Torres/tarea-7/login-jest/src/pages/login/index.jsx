import { useState } from "react";
import "./login.css";

export const Login = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <main className="login-page">
      <section aria-label="login-page-container">
        <form onSubmit={handleSubmit} className="login-page-form">
          <input
            data-testid="form-input"
            name="username"
            onChange={handleChange}
            value={username}
            placeholder="username"
          />
          <input
            data-testid="form-input"
            name="email"
            onChange={handleChange}
            value={email}
            placeholder="email"
          />
          <input
            data-testid="form-input"
            onChange={handleChange}
            value={password}
            name="password"
            placeholder="password"
          />
          <button data-testid="submit-button" type="submit">
            {submittedData ? "Submitted" : "Login"}
          </button>
        </form>
      </section>
    </main>
  );
};
