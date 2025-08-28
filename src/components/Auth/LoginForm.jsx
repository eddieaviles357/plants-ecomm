import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";


const LoginForm = ({ login }) => {
  const Navigate = useNavigate()
  const { currentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState([]);

  async function handleLogin(evt) {
    evt.preventDefault();
    let result = await login(formData);
    console.debug("RESULT_FROM_LOGIN", result);
    if (!result.success) setFormErrors( [result.errors] );
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value.toLowerCase() }));
  }

  useEffect(() => {
    if(currentUser) Navigate("/");
  })
  
  return (
    <div className="w-full px-4 mx-auto max-w-7xl sm:px-8 xl:px-0  mb-30">
      <div className="max-w-[570px] w-full mx-auto rounded-2xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
        <div className="text-center mb-11">
          <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">Login</h2>
        </div>
        <div>
          <form onSubmit={handleLogin}>
            <div className="mb-5">
              <label htmlFor="username" className="block mb-1.5 text-sm ">Username</label>
              <input 
                id="username" 
                placeholder="steinsgate" 
                className="rounded-lg border text-dark placeholder:text-sm text-sm placeholder:font-normal border-gray-3 h-11  focus:border-blue focus:outline-0  placeholder:text-dark-5 w-full  py-2.5 px-4 duration-200  focus:ring-0" 
                required
                type="text" 
                name="username"
                value={formData.username}
                onChange={handleChange}
                />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-1.5 text-sm text-gray-6">Password</label>
              <input 
                id="password" 
                placeholder="Enter your password" 
                className="rounded-lg border text-dark placeholder:text-sm text-sm placeholder:font-normal border-gray-3 h-11  focus:border-blue focus:outline-0  placeholder:text-dark-5 w-full  py-2.5 px-4 duration-200  focus:ring-0" 
                required 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                />
            </div>

            {/* {formErrors.length ? <Alert type="danger" messages={formErrors} /> : null} */}
            {formErrors.length ? <div>{formErrors}</div> : null}

            <button 
              type="submit" 
              className="w-full flex justify-center font-normal text-sm h-11 text-white bg-dark py-3 px-6 rounded-lg ease-out duration-200 hover:bg-blue mt-7.5 items-center gap-2"
              onSubmit={handleLogin}
              >
              Sign in 
            </button>
            <p className="mt-6 text-sm text-center">
              Already have an account?
              <a className="pl-1 font-medium duration-200 ease-out text-dark hover:text-blue-dark" href="/login">
                Log in Now!
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
};

export default LoginForm;