import {usePizzaofDay} from './usePizzaofDay'

const intl = new Intl.NumberFormat("en-US", {
    style : "currency",
    currency : "INR"
})
export default function Pizzaofday() {
    const PizzaoftheDay = usePizzaofDay();

        if(!PizzaoftheDay){
            return <div>Loading...</div>
        }
  return (
        <div className="pizza-of-the-day">
            <h2>Pizza of the Day</h2>
            <div>
                <div className="pizza-of-the-day-info">
                    <h3>{PizzaoftheDay.name}</h3>
                    <p>{PizzaoftheDay.description}</p>
                    <p className="pizza-of-the-day-price">
                        From : {intl.format(PizzaoftheDay.sizes.S)}
                    </p>
                </div>
                <img className='pizza-of-the-day-image' src={PizzaoftheDay.image} alt={PizzaoftheDay.name} />
            </div>
        </div>
  )
}
