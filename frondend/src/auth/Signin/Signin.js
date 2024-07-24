import Header from "../../components/header/header.js";
import { Link } from "react-router-dom";
const Signin =() =>{
    return (
        <>
            {/* <Header /> */}
            <div className="hero bg-base-250 min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                  <form className="card-body">
                    <div className="form-control  text-center"> 
                    <h className="text-2xl font-bold">Bookshelf</h>
                    <h className="text-2xl font-bold">Sign In</h>
                    <h className="text-1xl font-bold">New here? Create a Bookshelf Account</h>
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="sichan@bookshelf.com" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" placeholder="password" className="input input-bordered" required />
                      <label className="label">
                        <Link to="/Forgotpassword" className="link link-hover">Forgot Password</Link>
                      </label>
                    <div className="form-control  text-center"> 
                      <button className="btn btn-primary"> <Link to="/Dashboard" className="link link-hover">Sign in</Link></button>
                      <p>-------or continue with--------</p>
                      <button className="btn btn-wide "><Link to="/gmail.com" className="link link-hover">Google</Link></button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="text-left ">
                  <h1 className="text-4xl font-bold">Study Smart</h1>
                  <p className="py-12">
                    <b>Read anytime, anywhere.</b>
                  </p>
                </div>

              </div>
            </div>
        </>
      );
}
export default Signin;