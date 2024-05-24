import PageTemplate from "../../components/pageTemplate";
import image from "../../login.png"

const LoginPage = () => {
    return(
        <>
            <PageTemplate image={image} header={"Welcome Back"} smallHeader={"Log in to your Dashboard"} buttonText={"Login"} placeHolder1={"username"} placeHolder2={"password"}/>

        </>
    )
}
export default LoginPage;