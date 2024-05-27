import style from './index.module.css'
import React, {useState} from "react";
import * as Yup from 'yup';
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import {Field, Form, Formik} from "formik";
import {Icon} from "@iconify/react";
import loadingLoop from "@iconify/icons-line-md/loading-loop";
import FilledButton from "../filledButton";
import image from '../../login.png';

const Login = ()=>{
    const [isLoading, setIsLoading] = useState(false);
    const validateSchema = Yup.object().shape({
        username: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters and spaces')
            .required('Username is required'),
        password: Yup.string().required('Password is required')
    });
    const handleLogin = async (values, {resetForm})=>{
        setIsLoading(true);
        try{
            const payload = {
                username: values.username,
                password: values.password
            }
            const response = await axios.post("http://localhost:8080/api/v1/login-user", payload);
            console.log(response)
            if (response.status === 201) {
                toast.success(`Welcome back ${values.firstName}`, {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                resetForm();
            } else {
                toast.error('Login failed. Please try again', {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }catch (error){
            console.error('Error during subscription:', error);
            toast.error('Login failed. Please try again', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }finally{
            setIsLoading(false)
        }
    }

    return(
        <>
            <div className={style.login}>
                <img src={image} alt=""/>
                <div className={style.loginHeroText}>
                    <h1>Welcome Back</h1>
                    <p>Log in to your Dashboard</p>
                    <Formik
                        initialValues={{ username: '', password: ''}}
                        validationSchema={validateSchema}
                        onSubmit={handleLogin}
                    >
                        {({values, errors, handleBlur, handleChange})=>(
                            <Form className={style.loginForm}>
                                <Field
                                    name="username"
                                    placeholder="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Field
                                    name="password"
                                    placeholder="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <div className={style.btn}>
                                    <FilledButton text="Login" type="submit" className={style.btn}>
                                        {isLoading ? (
                                            <div className="flex items-center justify-center">
                                                <Icon width={24} height={24} icon={loadingLoop}/>
                                            </div>
                                        ) : (
                                             'Login'
                                        )}
                                    </FilledButton>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}
export default Login;