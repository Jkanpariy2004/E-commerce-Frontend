import React, { useState } from "react";
import Sidebar from "../../Common/Sidebar";
import Header from "../../Layouts/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiUrl, token } from "../../Common/Http";
import { toast } from "react-toastify";

function Edit() {
    const param = useParams();
    const [members, setMembers] = useState([]);
    const Navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const response = await fetch(apiUrl + 'members/get/' + param.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token()}`
                },
            });

            const result = await response.json();
            setMembers(result.data);
            return {
                name: result.data.name,
                job_title: result.data.job_title,
                linkedin_url: result.data.linkedin_url,
                status: result.data.status,
            }

        }
    });

    const onSubmit = async (data) => {
        const formData = new FormData();

        formData.append('name', data.name);
        formData.append('job_title', data.job_title);
        formData.append('linkedin_url', data.linkedin_url);
        formData.append('status', data.status);

        if (data.image[0]) {
            formData.append('image', data.image[0]);
        }

        try {
            const response = await fetch(apiUrl + 'members/update/' + param.id, {
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
                Navigate('/admin/members');
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
                                        <h4 className="h5">Create Member</h4>
                                        <Link to="/admin/members" className="btn btn-primary">
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
                                                {...register("name", {
                                                    required: "The Name field is required",
                                                })}
                                                type="text"
                                                className={`form-control ${errors.name && "is-invalid"}`}
                                                placeholder="Enter Member Name"
                                            />
                                            {errors.name && (
                                                <p className="invalid-feedback">
                                                    {errors.name?.message}
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
                                                members.image && <img src={members.image} width={300} height={200} />
                                            }
                                            {errors.image && (
                                                <p className="invalid-feedback">
                                                    {errors.image?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-lable">
                                                Job Title
                                            </label>
                                            <input
                                                {...register("job_title", {
                                                    required: "The Job Title field is required",
                                                })}
                                                type="text"
                                                className={`form-control ${errors.job_title && "is-invalid"}`}
                                                rows={4}
                                                placeholder="Enter Member Job Title"
                                            />
                                            {errors.job_title && (
                                                <p className="invalid-feedback">
                                                    {errors.job_title?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="" className="form-lable">
                                                LinkedIn URL
                                            </label>
                                            <input
                                                {...register("linkedin_url", {
                                                    required: "The LinkedIn URL is required",
                                                })}
                                                type="text"
                                                className={`form-control ${errors.linkedin_url && "is-invalid"}`}
                                                rows={4}
                                                placeholder="Enter Article Designation"
                                            />
                                            {errors.linkedin_url && (
                                                <p className="invalid-feedback">
                                                    {errors.linkedin_url?.message}
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
                                                <option value="" hidden>Select Member Status</option>
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

export default Edit;
