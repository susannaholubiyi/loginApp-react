import {useState} from "react";
import * as Yup from 'yup';
import axios from "axios";

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
        }catch (error){

        }
    }
}
export default Login;