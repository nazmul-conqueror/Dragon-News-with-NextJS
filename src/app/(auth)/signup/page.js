'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const {register, handleSubmit, formState:{errors},} = useForm()
    const handleRegisterFunc = (data) => {
        console.log(data);
        
        

    }




    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-200'>
            <div className='p-10 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center'>Register Your Account</h2>
                <form className=" mt-10  flex  flex-col gap-4" onSubmit={handleSubmit(handleRegisterFunc)} >
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                      
                        <label className="label">Name</label>
                        <input 
                        type="name" 
                        className="input" 
                        placeholder="Enter your name"
                       {...register("name", { required: "name field is required" }) }
                        />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                        <label className="label">Email</label>
                        <input 
                        type="email" 
                        className="input" 
                        placeholder="Email"
                       {...register("email", { required: "Email field is required"}) }
                        />
{errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                        <label className="label">Password</label>
                        <input
                         type="password" 
                         className="input" 
                         placeholder="Password"
                         {...register("password",{ required: "password is required "}) }
                         />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>

                </form>
            </div>
        </div>
    );
};

export default RegisterPage;

