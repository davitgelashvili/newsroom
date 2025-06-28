import styles from './CustomButton.module.scss'

const CustomButton = ({ text, onSubmit }: any) => {
    return (
        <button 
            onClick={onSubmit} 
            type='submit'
            className={styles.button}>
            {text}
        </button>
    )
}

export default CustomButton