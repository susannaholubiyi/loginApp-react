import style from './index.module.css';
const InputField = ({placeHolder, name})=>{
return(
    <>
        <input className={style.inputField} placeholder={placeHolder} name={name} type="text"/>
    </>
)
}
export default InputField;