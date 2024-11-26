import AddToCart from "./AddToCart"
import styles from './ProductCard.module.css'

const ProductCard = () => {
  
  return (
    // Module styling from css file for this specific page
    // <div className={styles.card}>

    // Tailwind premade styling classes
    // <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
    <div>
    <AddToCart/>
    </div>
  )
}

export default ProductCard