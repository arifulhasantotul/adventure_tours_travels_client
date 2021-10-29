import React from "react";
import { useForm } from "react-hook-form";
import * as FcIcons from "react-icons/fc";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "../Login/Login.css";

const Register = () => {
   const history = useHistory();
   const location = useLocation();

   const {
      error,
      setError,
      signInUsingGoogle,
      registerUserEmail,
      setIsLoading,
   } = useAuth();

   const redirect_url = location.state?.from || "/home";

   const handleGoogleSignIn = () => {
      setIsLoading(true);
      signInUsingGoogle()
         .then((result) => {
            history.push(redirect_url);
            setError("");
         })
         .catch((error) => {
            setError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   const handleCreateEmail = (email, password, checkPassword) => {
      registerUserEmail(email, password, checkPassword)
         .then((result) => {
            const user = result.user;
            console.log(user);
            history.push("/login");
            setError("");
         })
         .catch((error) => {
            setError(error.message);
         });
   };

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log(data);
      handleCreateEmail(
         data.email,
         data.password,
         data.checkPassword,
         data.displayName
      );
   };
   return (
      <div className="container-fluid form_wrapper">
         <h1 className="heading">
            <span>r</span>
            <span>e</span>
            <span>g</span>
            <span>i</span>
            <span>s</span>
            <span>t</span>
            <span>e</span>
            <span>r</span>
         </h1>
         {error && <div style={{ color: "red" }}></div>}
         <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input
               placeholder="Name"
               type="name"
               {...register("displayName", { required: true })}
            />

            {errors.displayName && (
               <span className="error"> Name is required</span>
            )}
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
            <input
               placeholder="Re-password"
               type="password"
               {...register("checkPassword", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.checkPassword && (
               <span className="error">Re-password is required</span>
            )}

            {error && <div style={{ color: "red" }}> {error}</div>}

            <input type="submit" />
            <p>
               already have an account? <Link to="/login">login</Link>
            </p>
         </form>
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

export default Register;
