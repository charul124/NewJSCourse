let counter = 0;
const Pizza = ({name,image,description}) => {
    return (
        <div 
            className="pizza" 
            onClick={() => {
                console.log(counter);
                
            }}
         >
            <h1>{name}</h1>
            <p>{description}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Pizza;