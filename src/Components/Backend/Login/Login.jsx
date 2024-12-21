import React, { useContext } from "react";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Auth";

function Login() {
    const { login } = useContext(AuthContext);
    const Navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const responce = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await responce.json();

        if (result.success == false) {
            toast.error(result.message);
        } else {
            const UserInfo = {
                id: result.user.id,
                token: result.token
            }

            localStorage.setItem('userInfo', JSON.stringify(UserInfo))

            login(UserInfo);
            Navigate('/admin/dashboard')
        }
    };

    return (
        <>
            <Header />
            <main>
                <div className="container my-5 d-flex justify-content-center">
                    <div className="login-form my-5">
                        <div className="card border-0 shadow">
                            <div className="card-body p-4">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="text-center">
                                        <h2 className="fs-2">Admin Login</h2>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-lable">
                                            Email
                                        </label>
                                        <input
                                            {...register("email", {
                                                required: "Email field is required",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Please enter a valid email address",
                                                },
                                            })}
                                            type="text"
                                            className={`form-control ${errors.email && "is-invalid"}`}
                                            placeholder="Please Enter Email"
                                        />
                                        {errors.email && (
                                            <p className="invalid-feedback">
                                                {errors.email?.message}
                                            </p>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="" className="form-lable">
                                            Password
                                        </label>
                                        <input
                                            {...register("password", {
                                                required: "Password field is required",
                                                minLength: {
                                                    value: 6,
                                                    message:
                                                        "Password must be at least 6 characters long",
                                                },
                                            })}
                                            type="passsword"
                                            className={`form-control ${errors.password && "is-invalid"
                                                }`}
                                            placeholder="Please Enter Password"
                                        />
                                        {errors.password && (
                                            <p className="invalid-feedback">
                                                {errors.password?.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary w-100">
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Login;
