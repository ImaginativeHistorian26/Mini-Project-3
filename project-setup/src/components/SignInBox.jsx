import React from 'react';

function SignInBox() {
  return (
    <div className="container my-4">
      <article className="sign-up-form">

        <div className="sign-up-container container mx-auto">
          <h2>Sign up or login to comment on posts.</h2>
          
          <form action="/action_page.php" method="post">
            <div className="sign-up-container-2">
              <input type="text" placeholder="Username" name="uname" required />

              <input type="password" placeholder="Password" name="psw" required />

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