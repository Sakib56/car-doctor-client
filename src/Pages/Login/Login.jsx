import React from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-20'>
            <div className='flex items-center'>
                <img className='w-96 h-[450px] mx-auto' src={img} alt="" />
            </div>
            <div className='border rounded-xl w-3/4 p-5'>
                <h1 className='text-4xl mt-5 font-bold text-center'>Login</h1>
                <form onSubmit={handleLogin} className='p-10'>
                    <label>
                        <p className='text-lg font-semibold mb-3'>Email</p>
                    </label>
                    <input className="input input-bordered w-full" type="email" placeholder='Enter your email' name="email"  />
                    <label>
                        <p className='text-lg font-semibold mb-3 mt-5'>Password</p>
                    </label>
                    <input className="input input-bordered w-full" type="password" placeholder='Enter your password' name="password" />
                    <Link><h1 className='mt-2'>Forget Password ? </h1></Link>

                    <input type="submit" className='w-full bg-[#FF3811] rounded-lg mt-5 py-2 text-xl text-white font-bold' value="Sign In" />
                    <h1 className='text-center mt-5'>New User Please ? <Link to='/signUp'><span className='link text-red-500'>Sign Up</span></Link></h1>
                </form>
            </div>
        </div>
    );
};

export default Login;