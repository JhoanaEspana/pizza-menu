import styles from './footer.module.css'

const Footer = () => {
  const now = new Date()
  const hour = now.getHours()
  const openHour = 8
  const closeHour = 22

  let msjClosed = hour >= openHour && hour <= closeHour ? 'Order now' : 'Closed'

  return (
    <>
      <h3>{new Date().toLocaleTimeString()}. We're currently open!</h3>
      <button className={styles.btn} disabled={msjClosed === 'Closed'}>
        {msjClosed}
      </button>
    </>
  )
}

export default Footer
