import styles from './pizzaItem.module.css'

const PizzaItem = ({ ingredients, name, photo, price, soldOut }) => {
  return (
    <div className={soldOut ? styles.sold_out : styles.item_container}>
      <div className={styles.item_img}>
        <img src={photo} alt='spinaci' />
      </div>
      <div className={styles.item_content}>
        <div className={styles.item_content_title}>
          <h2>{name}</h2>
          <h3>{soldOut ? 'Sold out' : price}</h3>
        </div>
        <div className={styles.item_content_text}>
          <p>{ingredients}</p>
        </div>
      </div>
    </div>
  )
}

export default PizzaItem
