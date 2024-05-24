import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import { Input } from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {

    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className='d-flex align-items-center justify-content-center w-100 mt-5'>

            <div className='mx-auto w-50 rounded-4 p-10 border-3 border-dark'>

                <h2 className='text-center'>Sign In to Your Account!</h2>

                <p className='mt-2 text-center'>

                    Already have any account?
                    <Link
                        to="/login"
                        className='text-primary font-control-md'>
                        Login
                    </Link>

                </p>

                {error && <p className='text-danger text-center mt-5'>{error}</p>}

                <form onSubmit={handleSubmit(create)} className='mt-5'>

                    <div class="container-fluid mb-3">
                        <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                        />
                    </div>

                    <div class="container-fluid mb-3">
                        <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                                }
                            })}
                        />
                    </div>

                    <div class="container-fluid mb-3">
                        <Input
                            label="Password: "
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                        />
                    </div>

                    <div class="container-fluid mb-3">
                        <button type="submit" class="btn btn-primary w-100">Create Account</button>
                    </div>

                </form>

            </div>
        
        </div>
    )
}

export default Signup
