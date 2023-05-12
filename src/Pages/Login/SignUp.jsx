import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {

    const { createUser } = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState('')

    const handleSignUp = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password.length < 6) {
            setError('password at least 6 character')
            return;
        }
        else if (password !== confirmPassword) {
            setError('password & confirm password not matched')
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-20'>
            <div className='flex items-center'>
                <img className='w-96 h-[450px] mx-auto' src={img} alt="" />
            </div>
            <div className='border rounded-xl w-3/4 p-5'>
                <h1 className='text-4xl mt-5 font-bold text-center'>Sign Up</h1>
                <form onSubmit={handleSignUp} className='p-10'>
                    <div className='form-control'>
                        <label>
                            <p className='text-lg font-semibold mb-3'>Name</p>
                        </label>
                        <input className="input input-bordered w-full" type="text" placeholder='Enter your name' name="name" />
                    </div>
                    <div className='form-control'>
                        <label>
                            <p className='text-lg font-semibold mb-3 mt-5'>Email</p>
                        </label>
                        <input className="input input-bordered w-full" type="email" placeholder='Enter your email' name="email" />
                    </div>
                    <div className='form-control'>
                        <label>
                            <p className='text-lg font-semibold mb-3 mt-5'>Password</p>
                        </label>
                        <input className="input input-bordered w-full" type={showPassword ? 'text' : 'password'} placeholder='Enter your password' name="password" />
                    </div>
                    <div className='form-control'>
                        <label>
                            <p className='text-lg font-semibold mb-3 mt-5'>Confirm Password</p>
                        </label>
                        <input className="input input-bordered w-full" type={showPassword ? 'text' : 'password'} placeholder='Enter your confirm password' name="confirmPassword" />
                    </div>
                    <div onClick={() => setShowPassword(!showPassword)} className='cursor-pointer my-3 text-sky-600'>
                        {
                            showPassword ? 'Hide password' : 'show password'
                        }
                    </div>
                    <div>
                        <p className='text-red-500 font-semibold'>{error}</p>
                    </div>
                    <input type="submit" className='w-full bg-[#FF3811] rounded-lg mt-5 py-2 text-xl text-white font-bold cursor-pointer' value="Sign Up" />
                    <h1 className='text-center mt-5'>Already Have an account? <Link to='/login'><span className='link text-red-500'>Sign In</span></Link></h1>
                </form>
            </div>
        </div>
    );
};

export default SignUp;