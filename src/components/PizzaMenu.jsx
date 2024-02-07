import styles from './pizzaMenu.module.css'
import PizzaItem from './PizzaItem'
import { pizzaData } from '../utils/data'

const PizzaMenu = () => {
  const data = pizzaData

  return (
    <>
      <div>
        <h3>Our menu</h3>
      </div>
      <div className={styles.items_container}>
        {data.map((pizza) => (
          <PizzaItem
            key={pizza.id}
            ingredients={pizza.ingredients}
            name={pizza.name}
            photo={pizza.photoName}
            price={pizza.price}
          />
        ))}
      </div>
    </>
  )
}

export default PizzaMenu
