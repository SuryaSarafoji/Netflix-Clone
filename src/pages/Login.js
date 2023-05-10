import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
function Login() {
  const { logIn } = UserAuth();
  const navigate = useNavigate();
  const [cred, setCred] = useState({ email: "", pwd: "" });
  async function signinHandler(e) {
    e.preventDefault();
    try {
      await logIn(cred.email, cred.pwd);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/efb4855d-e702-43e5-9997-bba0154152e0/42f6dd08-d478-46e4-a4a8-e3a93aa7e085/IN-en-20230417-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Netflix BG"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-10">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto  py-16">
              <h1 className="text-3xl  font-bold">Sign In</h1>
              <form
                onSubmit={signinHandler}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  value={cred.email}
                  onChange={(e) =>
                    setCred((prev) => {
                      return { ...prev, email: e.target.value };
                    })
                  }
                />

                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={cred.pwd}
                  onChange={(e) =>
                    setCred((prev) => {
                      return { ...prev, pwd: e.target.value };
                    })
                  }
                />
                <button
                  className="bg-red-600 py-3 my-6 rounded font-bold"
                  onClick={signinHandler}
                >
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">New to Netflix? </span>

                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
