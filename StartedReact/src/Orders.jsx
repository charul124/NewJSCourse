import Pizza from "./Pizza"
import { useEffect, useState } from "react";


const intl = new Intl.NumberFormat("en-US", {
    style : "currency",
    currency : "INR",
});

export default function Orders(){
    const [pizzatype, setPizzaType] = useState("Barbecue Chicken");
    const [pizzasize, setPizzaSize] = useState("Medium");
    const [pizzatypes, setPizzaTypes] = useState([]);
    const [loading, setLoading] = useState(true);
    
    let price, selectedPizza;
    if (!loading) {
        selectedPizza = pizzaTypes.find((pizza) => pizzaType === pizza.id);
        price = intl.format(
          selectedPizza.sizes ? selectedPizza.sizes[pizzaSize] : "",
        );
      }

    useEffect(() => {
        fetchpizzatypes();
    }, [])

    async function fetchpizzatypes(){
        const pizzaresult = await fetch("/api/pizzas");
        const pizzajson = await pizzaresult.json();
        setPizzaTypes(pizzajson);
        setLoading(false);
    }

    return (
        <div className="order">
            <h2>Create Order Page</h2>
            <form>
                <div>
                    <div>
                        <label htmlFor="pizza-type">Pizza Type</label>
                        <select 
                        onChange={(e) => setPizzaType(e.target.value)}
                        name="pizza-type" 
                        value={pizzatype}
                        >
                            {pizzatypes.map((pizza) => (
                                    <option key={pizza.id} value={pizza.id}>
                                        {pizza.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="pizza-size">Pizza-Size</label>
                        <div>
                            <span>
                                <input 
                                    checked = {pizzasize === "Regular"}
                                    type = "radio"
                                    name = "pizza-size"
                                    value = "Regular"
                                    id = "pizza-s"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-s">Regular</label>
                            </span>
                            <span>
                                <input 
                                    checked = {pizzasize === "Medium"}
                                    type = "radio"
                                    name = "pizza-size"
                                    value = "Medium"
                                    id = "pizza-m"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-m">Medium</label>
                            </span>
                            <span>
                                <input 
                                    checked = {pizzasize === "Large"}
                                    type = "radio"
                                    name = "pizza-size"
                                    value = "Large"
                                    id = "pizza-l"
                                    onChange={(e) => setPizzaSize(e.target.value)}
                                />
                                <label htmlFor="pizza-l">Large</label>
                            </span>
                        </div>
                    </div>
                    <button type="submit">Add to Cart</button>
                    <div>
                        {loading ? (
                            <h3>Loading ... </h3>
                        ) : (
                        <div className="order-pizza">
                            <Pizza 
                                name = {selectedPizza.name}
                                description = {selectedPizza.description}
                                image = {selectedPizza.image}
                            />
                            <p>{price}</p>
                        </div>
                    )}
                    </div>
                </div>
            </form>
        </div>
    )
}