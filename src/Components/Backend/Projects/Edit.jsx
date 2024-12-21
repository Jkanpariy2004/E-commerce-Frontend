import React, { useState } from "react";
import Sidebar from "../../Common/Sidebar";
import Header from "../../Layouts/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { apiUrl, token } from "../../Common/Http";
import { toast } from "react-toastify";

function Edit() {
    const param = useParams();
    const [projects, setProjects] = useState([]);
    const Navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            const response = await fetch(apiUrl + 'projects/get/' + param.id, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token()}`
                },
            });

            const result = await response.json();
            setProjects(result.data);
            return {
                title: result.data.title,
                short_desc: result.data.short_desc,
                content: result.data.content,
                construction_type: result.data.construction_type,
                sector: result.data.sector,
                location: result.data.location,
                status: result.data.status,
            }

        }
    });

    const onSubmit = async (data) => {
        const formData = new FormData();

        formData.append('title', data.title);
        formData.append('short_desc', data.short_desc);
        formData.append('content', data.content);
        formData.append('construction_type', data.construction_type);
        formData.append('sector', data.sector);
        formData.append('location', data.location);
        formData.append('status', data.status);

        if (data.image[0]) {
            formData.append('image', data.image[0]);
        }

        try {
            const response = await fetch(apiUrl + 'projects/update/' + param.id, {
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
                Navigate('/admin/projects');
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
                                        <h4 className="h5">Create Projects</h4>
                                        <Link to="/admin/projects" className="btn btn-primary">
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
                                                placeholder="Enter Project Name"
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
                                                placeholder="Enter Project Short Description"
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
                                                placeholder="Enter Project Content"
                                            />
                                            {errors.content && (
                                                <p className="invalid-feedback">
                                                    {errors.content?.message}
                                                </p>
                                            )}
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-lable">
                                                        Location
                                                    </label>
                                                    <input
                                                        {...register("location", {
                                                            required: "The Location field is required",
                                                        })}
                                                        type="text"
                                                        className={`form-control ${errors.location && "is-invalid"}`}
                                                        rows={4}
                                                        placeholder="Enter Project Location"
                                                    />
                                                    {errors.location && (
                                                        <p className="invalid-feedback">
                                                            {errors.location?.message}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-lable">
                                                        Construction Type
                                                    </label>
                                                    <select
                                                        {...register("construction_type", {
                                                            required: "The Construction Type field is required",
                                                        })}
                                                        className={`form-control ${errors.construction_type && "is-invalid"}`}
                                                    >
                                                        <option value="" hidden>Select Construction Type</option>
                                                        <option value="Residential construction">Residential construction</option>
                                                        <option value="Commercial construction">Commercial construction</option>
                                                        <option value="Industrial construction">Industrial construction</option>
                                                        <option value="Infrastructure construction">Infrastructure construction</option>
                                                    </select>
                                                    {errors.construction_type && (
                                                        <p className="invalid-feedback">
                                                            {errors.construction_type?.message}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="mb-3">
                                                    <label htmlFor="" className="form-lable">
                                                        Sector
                                                    </label>
                                                    <select
                                                        {...register("sector", {
                                                            required: "The Sector field is required",
                                                        })}
                                                        className={`form-control ${errors.sector && "is-invalid"}`}
                                                    >
                                                        <option value="" hidden>Select Project Sector</option>
                                                        <option value="Health">Health</option>
                                                        <option value="Education">Education</option>
                                                        <option value="Corporate">Corporate</option>
                                                    </select>
                                                    {errors.sector && (
                                                        <p className="invalid-feedback">
                                                            {errors.sector?.message}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="col-md-6">
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
                                            </div>
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
                                                projects.image && <img src={projects.image} width={300} height={200} />
                                            }
                                            {errors.image && (
                                                <p className="invalid-feedback">
                                                    {errors.image?.message}
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
