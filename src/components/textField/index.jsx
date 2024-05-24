import style from './index.module.css'
const TextField = (text, buttonText)=>{
    return(
        <>
            <p>{text} </p>
            <button className={style.textField}>{buttonText}</button>
        </>
    )
}
export default TextField;