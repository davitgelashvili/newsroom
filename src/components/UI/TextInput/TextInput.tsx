import styles from './TextInput.module.scss'

const TextInput = ({title, type, placeholder, name, value, onChange}:any) => {
    return (
        <label className={styles.textinput}>
            <p className={styles.textinput__title}>{title}</p>
            <input 
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                className={styles.textinput__input}
                />
        </label>
    )
}

export default TextInput