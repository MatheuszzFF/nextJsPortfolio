import {TInput} from './type'
import styles from './input.module.css';


export const Input = (props: TInput<string>) => {
  const {
        type,
        name,
        placeholder,
        labelText,
        state,
        setState
    } = props
  return (
    <label className={styles.label}>
      <span>{labelText}</span>
      <input 
      className={styles.input}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      onChange={(e)=> {setState(e.target.value)}}
      value={state && state}
      />
    </label>
  )
}
