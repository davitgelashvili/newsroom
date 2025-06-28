import { decodeToken } from '../../helpers/jwt'
import getApi from '../../http/getApi'
import styles from './Dashboard.module.scss'

const Item = ({ item }: any) => {
    const token = localStorage.getItem('accessToken')
    const userData = decodeToken(token)

    function addCart() {
        getApi({
            url: 'https://dummyjson.com/carts/add',
            method: 'post',
            data: {
                userId: userData?.id,
                products: [
                    {
                        id: item.id,
                        quantity: 1
                    }
                ]
            }
        })
            .then((res) => {
                console.log(1, res)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className={styles.item}>
            <figure className={styles.item__cover}>
                <img src={item.img} alt={'cover'} />
            </figure>
            <h1 className={styles.item__title}>{item.title}</h1>
            <div className={styles.item__footer}>
                <span>{item.price} ლ</span>
                <button onClick={addCart}>+</button>
            </div>
        </div>
    )
}

export default Item