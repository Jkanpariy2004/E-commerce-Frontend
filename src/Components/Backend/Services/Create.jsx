import React, { useState } from "react";
import Sidebar from "../../Common/Sidebar";
import Header from "../../Layouts/Header";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiUrl, token } from "../../Common/Http";
import { toast } from "react-toastify";

function Create() {
    const Navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();

        formData.append('title', data.title);
        formData.append('short_desc', data.short_desc);
        formData.append('content', data.content);
        formData.append('status', data.status);

        if (data.image[0]) {
            formData.append('image', data.image[0]);
        }

        try {
            const response = await fetch(apiUrl + 'services/insert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token()}`
                },
                body: formData,
            });

            const result = await response.json();

            if (result.success == true) {
                toast.success(result.message);
                Navigate('/admin/services');
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error('Error uploading data:', error);
            toast.error('Something went wrong while submitting the form.');
        }
    };


    return (
        <>
            <Header />
            <main>
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-md-2">
                            <Sidebar />
                        </div>
                        <div className="col-md-10">
                            <div className="card border-0 shadow">
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between">
                                        <h4 className="h5">Create Services</h4>
                                        <Link to="/admin/services" className="btn btn-primary">
                                            Back
                                        </Link>
                                    </div>
                                    <hr />

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-lable">
                                                Name
                                            </label>
                                            <input
                                                {...register("title", {
                                                    required: "The Title field is required",
                                                })}
                                                type="text"
                                                className={`form-control ${errors.title && "is-invalid"}`}
                                                placeholder="Enter Service Name"
                                            />
                                            {errors.title && (
                                                <p className="invalid-feedback">
                                                    {errors.title?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-lable">
                                                Short Description
                                            </label>
                                            <input
                                                {...register("short_desc", {
                                                    required: "The Short Description field is required",
                                                })}
                                                type="text"
                                                className={`form-control ${errors.short_desc && "is-invalid"}`}
                                                rows={4}
                                                placeholder="Enter Service Short Description"
                                            />
                                            {errors.short_desc && (
                                                <p className="invalid-feedback">
                                                    {errors.short_desc?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-lable">
                                                Content
                                            </label>
                                            <textarea
                                                {...register("content", {
                                                    required: "The Contant field is required",
                                                })}
                                                className={`form-control ${errors.content && "is-invalid"}`}
                                                rows={4}
                                                placeholder="Enter Service Content"
                                            />
                                            {errors.content && (
                                                <p className="invalid-feedback">
                                                    {errors.content?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-lable">
                                                Image
                                            </label>
                                            <input
                                                {...register("image", {
                                                    required: "The Service Image field is required",
                                                })}
                                                type="file"
                                                className={`form-control ${errors.image && "is-invalid"}`}
                                            />
                                            {errors.image && (
                                                <p className="invalid-feedback">
                                                    {errors.image?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-lable">
                                                Status
                                            </label>
                                            <select
                                                {...register("status", {
                                                    required: "The Status field is required",
                                                })}
                                                className={`form-control ${errors.status && "is-invalid"}`}
                                            >
                                                <option value="" hidden>Select Service Status</option>
                                                <option value="1">Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
                                            {errors.status && (
                                                <p className="invalid-feedback">
                                                    {errors.status?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <button className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Create;
