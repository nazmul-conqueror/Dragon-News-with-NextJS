'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const {register, handleSubmit, formState:{errors},} = useForm()
    const handleLoginFunc = (data) => {
        console.log(data);
        
        

    }




    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-200'>
            <div className='p-10 rounded-xl bg-white'>
                <h2 className='font-bold text-3xl text-center'>Login Your Account</h2>
                <form className=" mt-10  flex  flex-col gap-4" onSubmit={handleSubmit(handleLoginFunc)} >
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                      
                        <label className="label">Email</label>
                        <input 
                        type="email" 
                        className="input" 
                        placeholder="Email"
                       {...register("email", { required: true }) }
                        />

                        <label className="label">Password</label>
                        <input
                         type="password" 
                         className="input" 
                         placeholder="Password"
                         {...register("password",{ required: "password is required "}) }
                         />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>

                </form>
                <p>Dont have an Account?{" "}

                    <Link className='text-blue-500' href={"/signup"}>register</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;

