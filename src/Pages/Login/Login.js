import React from "react";
import { useForm } from "react-hook-form";
import * as FcIcons from "react-icons/fc";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
   const history = useHistory();
   const location = useLocation();

   const {
      error,
      setError,
      setIsLoading,
      signInUsingEmail,
      signInUsingGoogle,
   } = useAuth();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const redirect_uri = location.state?.from || "/home";

   const handleGoogleSignIn = () => {
      setIsLoading(true);
      signInUsingGoogle().then((result) => {
         console.log(result.user);
         history.push(redirect_uri);
         setError("");
      });
   };

   const handleSignInUsingEmail = (email, password) => {
      signInUsingEmail(email, password)
         .then((result) => {
            history.push(redirect_uri);
            setError("");
         })
         .catch((error) => {
            setError(error.message);
         })
         .finally(() => {
            setIsLoading(false);
         });
   };

   const onSubmit = (data) => {
      console.log(data);
      handleSignInUsingEmail(data.email, data.password);
   };
   return (
      <div className="container-fluid form_wrapper">
         <h1 className="heading">
            <span>l</span>
            <span>o</span>
            <span>g</span>
            <span>i</span>
            <span>n</span>
         </h1>
         <h4>Login to See Private Pages</h4>
         {error && <div style={{ color: "red" }}></div>}
         <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
               placeholder="Email"
               type="email"
               {...register("email", { required: true })}
            />

            {errors.email && <span className="error"> Email is required</span>}

            {/* include validation with required or other standard HTML validation rules */}
            <input
               placeholder="Password"
               type="password"
               {...register("password", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.password && (
               <span className="error">Password is required</span>
            )}

            <input className="btn_book" type="submit" />
         </form>
         <p>
            don't have account? <Link to="/register">Create one</Link>
         </p>
         <p>or</p>
         <div className="other_login">
            <h3>Sign in via</h3>
            <button onClick={handleGoogleSignIn}>
               {" "}
               <span className="login_icon">
                  <FcIcons.FcGoogle />{" "}
               </span>
            </button>
         </div>
      </div>
   );
};

export default Login;
