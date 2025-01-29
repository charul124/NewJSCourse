import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import { StrictMode } from "react";
import Orders from "./Orders";
import Passgen from "./PassGenProject/Passgen";
const App = () => {
    
    return (
        <StrictMode>
        <div>
            <h1>Padre Gino's</h1>
            <Orders/>
        </div>
        </StrictMode>
    );
};

// const pizza = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("p", {}, props.description),
//     ]);
// }

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);