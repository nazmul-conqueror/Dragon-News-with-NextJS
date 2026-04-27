'use client'
import { authClient } from '@/lib/auth-client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const handleRegisterFunc = async (data) => {
        const { email, name, password, photo } = data

        const { data: res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/",
        })

        console.log(res, error);

        if (error) {
            alert(error.message)
        }
        if (res) {

        }
    }


    const [isShowPassword, setISShowPassword] = useState(false)


    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-200'>
            <div className='p-10 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center'>Register Your Account</h2>
                <form className=" mt-10  flex  flex-col gap-4" onSubmit={handleSubmit(handleRegisterFunc)} >
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 relative">

                        <label className="label">Name</label>
                        <input
                            type="name"
                            className="input"
                            placeholder="Enter your name"
                            {...register("name", { required: "name field is required" })}
                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        <label className="label">photo url</label>
                        <input
                            type="text"
                            className="input"
                            placeholder="type here photo url"
                            {...register("photo", { required: "photo url is required" })}
                        />
                        {errors.photo && <p className='text-red-500'>{errors.photo.message}</p>}

                        <label className="label">Email</label>
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            {...register("email", { required: "Email field is required" })}
                        />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        <label className="label">Password</label>
                        <input
                            type={isShowPassword? "text" :"password"}
                            className="input"
                            placeholder="Password"
                            {...register("password", { required: "password is required " })}
                        />
                        <span onClick={() => setISShowPassword(!isShowPassword)} className='absolute right-6 top-7/9 -translate-y-1/2 cursor-pointer'>
                        {isShowPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>

                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>

                </form>
            </div>
        </div>
    );
};

export default RegisterPage;

