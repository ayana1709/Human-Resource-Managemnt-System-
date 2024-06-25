import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import SelectiveDropdown from "@/Components/SelectiveDropDown";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        user_type: "employee",
        // department: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleUserTypeChange = (value) => {
        setData("user_type", value);
    };

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                        Create Your Account
                    </h1>

                    {/* Name */}
                    <div className="mb-4">
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            autoComplete="name"
                            isFocused={true}
                            onChange={handleChange}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            autoComplete="username"
                            onChange={handleChange}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    {/* Role */}
                    <div className="mb-4">
                        <InputLabel htmlFor="user_type" value="Role" />

                        <SelectiveDropdown
                            value={data.user_type}
                            onChange={handleUserTypeChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                        <InputError message={errors.role} className="mt-2" />
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            autoComplete="new-password"
                            onChange={handleChange}
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirm Password"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            autoComplete="new-password"
                            onChange={handleChange}
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-between mt-6">
                        <p>
                            have an account?{" "}
                            <Link
                                href={route("login")}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Login
                            </Link>
                        </p>

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Register
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
