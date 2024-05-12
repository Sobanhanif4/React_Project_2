import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css"
const Button = (props) => {
  const {isOutLine, icon, text} = props;
  return (

    <button className={props.isOutLine ? styles.outline_btn : styles.primary_btn}>
    {icon}
    {text}
      
    </button>
  )
}

export default Button