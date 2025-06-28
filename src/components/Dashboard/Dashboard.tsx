import cover from './../../assetss/images/postcover.png'
import Item from './Item'
import styles from './Dashboard.module.scss'

const Dashboard = () => {

    const data = [
        {
            id: 'd23ds',
            img: String(cover),
            title: 'ტესტ',
            price: '9.99'
        },
        {
            id: 'fe233f',
            img: String(cover),
            title: 'სატესტო სათაური ბევრი',
            price: '90.99'
        },
        {
            id: 'გდსგდსგ',
            img: String(cover),
            title: 'სხვადასხვა სატესტო სათაური',
            price: '12'
        },
        {
            id: 'გწ43გდ',
            img: String(cover),
            title: 'ტესტ',
            price: '9.99'
        },
        {
            id: 'ფგწრგ4',
            img: String(cover),
            title: 'სატესტო სათაური ბევრი',
            price: '90.99'
        },
        {
            id: 'ფ43ფდწსფ',
            img: String(cover),
            title: 'სხვადასხვა სატესტო სათაური',
            price: '12'
        },
    ]
    return (
        <div className={styles.row}>
            {data?.map(item=>{
                return (
                    <div className={styles.col} key={item.id}>
                        <Item item={item}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Dashboard