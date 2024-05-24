import style from "./index.module.css"
const FilledButton = ({color, text, textColor})=>{
    return(
        <div>
            <button className={style.btn} style={{}}>{text}</button>
        </div>
    )

}
export default FilledButton;