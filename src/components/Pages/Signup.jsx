import BrowseCategory from "../BrowseCategory";

const Signup = () => {
  return (
    <section className="pb-20 mt-35 overflow-hidden bg-gray-2">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-8 xl:px-0  mb-30">
        <div className="max-w-[570px] w-full mx-auto rounded-2xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
          <div className="text-center mb-11">
            <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">Sign Up for an Account</h2>
          </div>
          <div>
            <form>
                <div className="mb-5">
                  <label htmlFor="firstname" className="block mb-1.5 text-sm ">FirstName</label>
                  <input 
                    id="firstname" 
                    placeholder="Stein" 
                    className="rounded-lg border text-dark placeholder:text-sm text-sm placeholder:font-normal border-gray-3 h-11  focus:border-blue focus:outline-0  placeholder:text-dark-5 w-full  py-2.5 px-4 duration-200  focus:ring-0" 
                    required
                    type="text" 
                    name="firstname"
                    />
                </div>
                <div className="mb-5">
                  <label htmlFor="lastname" className="block mb-1.5 text-sm ">LastName</label>
                  <input 
                    id="lastname" 
                    placeholder="Gate" 
                    className="rounded-lg border text-dark placeholder:text-sm text-sm placeholder:font-normal border-gray-3 h-11  focus:border-blue focus:outline-0  placeholder:text-dark-5 w-full  py-2.5 px-4 duration-200  focus:ring-0" 
                    required
                    type="text" 
                    name="lastname"
                    />
                </div>
                <div className="mb-5">
                  <label htmlFor="username" className="block mb-1.5 text-sm ">Username</label>
                  <input 
                    id="username" 
                    placeholder="steinsgate" 
                    className="rounded-lg border text-dark placeholder:text-sm text-sm placeholder:font-normal border-gray-3 h-11  focus:border-blue focus:outline-0  placeholder:text-dark-5 w-full  py-2.5 px-4 duration-200  focus:ring-0" 
                    required
                    type="text" 
                    name="username"
                    />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-1.5 text-sm ">Email</label>
                  <input 
                    id="email" 
                    placeholder="example@gmail.com" 
                    className="rounded-lg border text-dark placeholder:text-sm text-sm placeholder:font-normal border-gray-3 h-11  focus:border-blue focus:outline-0  placeholder:text-dark-5 w-full  py-2.5 px-4 duration-200  focus:ring-0" 
                    required 
                    type="email" 
                    name="email" 
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
                    />
                </div>
                <button 
                  type="submit" 
                  className="w-full flex justify-center font-normal text-sm h-11 text-white bg-dark py-3 px-6 rounded-lg ease-out duration-200 hover:bg-blue mt-7.5 items-center gap-2">
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
      <BrowseCategory />
    </section>
  )
}
export default Signup;