import React, { useState } from "react";
import Sidebar from "../../Common/Sidebar";
import Header from "../../Layouts/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiUrl, token } from "../../Common/Http";
import { toast } from "react-toastify";

function Create() {
    const param = useParams();
    const [testimonials, setTestimonials] = useState([]);
    const Navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const response = await fetch(apiUrl + 'testimonial/get/' + param.id, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token()}`
                },
            });

            const result = await response.json();
            setTestimonials(result.data);
            return {
                testimonial: result.data.testimonial,
                citation: result.data.citation,
                designations: result.data.designations,
                status: result.data.status,
            }
        }
    });

    const onSubmit = async (data) => {
        const formData = new FormData();

        formData.append('testimonial', data.testimonial);
        formData.append('citation', data.citation);
        formData.append('designations', data.designations);
        formData.append('status', data.status);

        if (data.image[0]) {
            formData.append('image', data.image[0]);
        }

        try {
            const response = await fetch(apiUrl + 'testimonial/update/' + param.id, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token()}`
                },
                body: formData,
            });

            const result = await response.json();

            if (result.success == true) {
                toast.success(result.message);
                Navigate('/admin/testimonials');
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
                                        <h4 className="h5">Create Articles</h4>
                                        <Link to="/admin/articles" className="btn btn-primary">
                                            Back
                                        </Link>
                                    </div>
                                    <hr />

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-lable">
                                                Testimonial
                                            </label>
                                            <input
                                                {...register("testimonial", {
                                                    required: "The Testimonial field is required",
                                                })}
                                                type="text"
                                                className={`form-control ${errors.testimonial && "is-invalid"}`}
                                                placeholder="Enter Article Testimonial"
                                            />
                                            {errors.testimonial && (
                                                <p className="invalid-feedback">
                                                    {errors.testimonial?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-lable">
                                                Citation
                                            </label>
                                            <input
                                                {...register("citation", {
                                                    required: "The Citation field is required",
                                                })}
                                                type="text"
                                                className={`form-control ${errors.citation && "is-invalid"}`}
                                                rows={4}
                                                placeholder="Enter Article Citation"
                                            />
                                            {errors.citation && (
                                                <p className="invalid-feedback">
                                                    {errors.citation?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-lable">
                                                Designation
                                            </label>
                                            <input
                                                {...register("designations", {
                                                    required: "The Designation field is required",
                                                })}
                                                type="text"
                                                className={`form-control ${errors.designations && "is-invalid"}`}
                                                rows={4}
                                                placeholder="Enter Article Designation"
                                            />
                                            {errors.designations && (
                                                <p className="invalid-feedback">
                                                    {errors.designations?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-lable">
                                                Image
                                            </label>
                                            <input
                                                {...register("image")}
                                                type="file"
                                                className={`form-control ${errors.image && "is-invalid"}`}
                                            />
                                            {
                                                testimonials.image && <img src={testimonials.image} width={300} height={200} />
                                            }
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
                                                <option value="" hidden>Select Project Status</option>
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
