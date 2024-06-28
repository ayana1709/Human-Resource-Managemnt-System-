import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/inertia-react";

const Show = ({ posting }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        resume: null,
        cover_letter: "",
    });

    const { data, setData, post, processing, errors } = useForm(formData);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("job-postings.apply", posting.id));
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const newValue = files ? files[0] : value;
        setFormData((prevData) => ({ ...prevData, [name]: newValue }));
    };

    return (
        <div>
            <h1>{posting.title}</h1>
            <p>{posting.description}</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="resume" className="form-label">
                        Resume (PDF only)
                    </label>
                    <input
                        type="file"
                        className="form-control"
                        id="resume"
                        name="resume"
                        accept=".pdf"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cover_letter" className="form-label">
                        Cover Letter
                    </label>
                    <textarea
                        className="form-control"
                        id="cover_letter"
                        name="cover_letter"
                        value={data.cover_letter}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={processing}
                >
                    Apply
                </button>
            </form>
        </div>
    );
};

export default Show;
