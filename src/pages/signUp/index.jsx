import PageTemplate from "../../components/pageTemplate";
import image from "../../signUp.png"

const SignUp = ()=>{
    return(
       <>
           <PageTemplate image={image} header={"Welcome!"} smallHeader={"Sign up by entering the  information below"}
                         buttonText={"Sign up"} placeHolder1={"first name"} placeHolder2={"last name"} placeHolder3={"username"}
                         placeHolder4={"password"} isLogin={false} url={"http://localhost:8080/api/v1/register-user"}/>

       </>
    )
}
export default SignUp;