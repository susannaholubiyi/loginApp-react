import PageTemplate from "../../components/pageTemplate";
import image from "../../login.png"

const loginPage1 = () => {
    return(
        <>
            <PageTemplate image={image} header={"Welcome Back"} smallHeader={"Log in to your Dashboard"} buttonText={"Login"}
                          placeHolder1={"username"} placeHolder2={"password"} isLogin={true} url={"http://localhost:8080/api/v1/login-user"}/>

        </>
    )
}
export default loginPage1;