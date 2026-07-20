import React, { useState } from "react";

function SignInBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password, email });
  };

  return (
    <div className="container my-4">
      <article className="sign-up-form">
        <div className="sign-up-container container mx-auto">
          <h2>Sign up or login to comment on posts.</h2>
          <form onSubmit={handleSubmit}>
            <div className="sign-up-container-2">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button className="form-btn" type="submit">
                Sign Up
              </button>
              <button className="form-btn" type="submit">
                Log In
              </button>
            </div>
          </form>
        </div>
      </article>
    </div>
  );
}

export { SignInBox };
