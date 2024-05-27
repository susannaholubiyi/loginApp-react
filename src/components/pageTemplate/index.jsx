import style from "./index.module.css"
import FilledButton from "../filledButton";
import {Field, Form, Formik} from "formik";
import React,{useState} from "react";
import axios from 'axios';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup'
import {Icon} from '@iconify/react';
import loadingLoop from '@iconify/icons-line-md/loading-loop';

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters and spaces')
        .required('First name is required'),
    lastName: Yup.string()
        .matches(/^[a-zA-Z\s]+$/, 'Name should only contain letters and spaces')
        .required('Last name is required'),
    username: Yup.string().required('Username is required'),
});

const PageTemplate =({image, header, smallHeader, placeHolder1, isLogin,
                         placeHolder2, placeHolder3, placeHolder4,url})=>{
    const [isLoading, setIsLoading] = useState(false);
    const handleRegistration = async (values, {resetForm})=>{
        setIsLoading(true);
        try{
           const payload = {
               username: values.username,
               password: values.password
           }
           const response = await axios.post(url, payload);
           console.log(response)
            if (response.status === 201) {
                toast.success(`Welcome ${values.firstName}`, {
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
                toast.error('Registration failed. Please try again', {
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
            toast.error('Subscription failed. Please try again', {
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
            <div className={style.pg} style={{}}>
                <img src={image} alt=""/>
                <div className={style.heroText} >
                    <h1>{header}</h1>
                    <p>{smallHeader}</p>
                    <Formik
                        initialValues={{firstName: '', lastName: '', username: '', password: ''}}
                        validationSchema={validationSchema}
                        onSubmit={handleRegistration}
                    >
                        {({values, errors,handleChange,handleBlur})=> (
                            <Form className={style.form}>
                                {placeHolder1 &&
                                    <Field
                                        name="firstName"
                                        type="text"
                                        placeholder={placeHolder1}
                                        value = {values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                }
                                {/*{errors.firstName && touched.firstName &&*/}
                                {/*    <div className={style.error}>{errors.firstName}</div>}*/}

                                {placeHolder2 &&
                                    <Field
                                        name = "lastName"
                                        placeholder={placeHolder2}
                                        value = {values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />}
                                {placeHolder3 &&
                                    <Field
                                        name = "username"
                                        placeholder={placeHolder3}
                                        value ={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />}
                                {placeHolder4 &&
                                    <Field
                                        name ="password"
                                        placeholder={placeHolder4}
                                        value ={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />}
                                <div>
                                    <p> </p>
                                </div>
                                <div className={style.btn}>
                                    <FilledButton text="Sign up" type="submit" className={style.btn}>
                                        {isLoading ? (
                                            <div className="flex items-center justify-center">
                                                <Icon width={24} height={24} icon={loadingLoop}/>
                                            </div>
                                        ) : (
                                            isLogin ? 'Login' : 'Sign Up'
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
export default PageTemplate;