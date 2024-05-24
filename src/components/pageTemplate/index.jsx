import style from "./index.module.css"
import FilledButton from "../filledButton";
import InputField from "../inputField";
import TextField from "../textField";
const PageTemplate =({image, header, smallHeader, buttonText, placeHolder1, placeHolder2, placeHolder3, placeHolder4, textField})=>{
    return(
        <>
            <div className={style.pg} style={{}}>
                <img src={image} alt=""/>
                <div className={style.heroText} >
                    <h1>{header}</h1>
                    <p>{smallHeader}</p>
                   <form className={style.form}>
                       {placeHolder1 && <InputField placeHolder={placeHolder1}/>}
                       {placeHolder2 && <InputField placeHolder={placeHolder2}/>}
                       {placeHolder3 && <InputField placeHolder={placeHolder3}/>}
                       {placeHolder4 && <InputField placeHolder={placeHolder4}/>}
                       <div>

                       </div>
                       <FilledButton text={buttonText}/>
                   </form>

                </div>
            </div>
        </>
    )
}
export default PageTemplate;