// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let sum1 = 0

      cartList.forEach(each => {
        sum1 += each.quantity * each.price
      })
      return (
        <div className="summary">
          <h1>
            Order Total:<span>{sum1}</span>
          </h1>
          <p>{cartList.length} items in cart</p>
          <button className="btn12" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
