import styles from './CustomCheckbox.module.scss'

const CustomCheckbox = ({ text, type, }: any) => {
    return (
        <label className={styles.checkbox}>
            <input
                type={type}
                className={styles.checkbox__input}
            />
            <p className={styles.checkbox__text}>{text}</p>
        </label>
    )
}

export default CustomCheckbox