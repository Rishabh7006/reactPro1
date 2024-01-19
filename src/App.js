// Import necessary modules
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes , Route, useNavigate, useLocation } from 'react-router-dom';
import PaymentGateway from './PaymentGateway';
import './App.css';
import Header from './Header';
import OrderSuccessPage from './OrderSuccessPage';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 499,
    photoName: "./focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 349,
    photoName: "./margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 699,
    photoName: "./spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 699,
    photoName: "./funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 349,
    photoName: "./salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 549,
    photoName: "./prosciutto.jpg",
    soldOut: false,
  },
];

export default function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/payU" element={<PaymentGateway />} />
          <Route path="/order-success" element={<OrderSuccessPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Menu() {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {numPizzas} creative {numPizzas === 1 ? 'dish left' : 'dishes' } to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza
                pizzaObj={pizza}
                key={pizza.name}
                onClick={() => setSelectedPizza(pizza)}
              />
            ))}
          </ul>
          {selectedPizza && (
            <PizzaPopup
              pizzaObj={selectedPizza}
              onClose={() => setSelectedPizza(null)}
            />
          )}
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}

function PizzaPopup({ pizzaObj, onClose }) {
  return (
    <div className="pizza-popup">
      <div className="modal-overlay" />
      <div className="modal-content">
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <div className="order">
          <h3>{pizzaObj.name}</h3>
          <button className="btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Pizza({ pizzaObj, onClick }) {
  const [quantity, setQuantity] = useState(0);
  const quantityLimit = 5; // Set your quantity limit here

  const handleIncrement = () => {
    if (quantity < quantityLimit) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      alert(`You can't order more than ${quantityLimit} pizzas.`);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} onClick={onClick} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>₹{pizzaObj.price}</span>
        {pizzaObj.soldOut ? (
          <span className="sold-out-label">SOLD OUT</span>
        ) : (
          <>
            <div className="quantity-controls">
              <button className="quantity-button" onClick={handleDecrement}>-</button>
              <span className="quantity-display">{quantity}</span>
              <button className="quantity-button" onClick={handleIncrement}>+</button>
            </div>
            
          </>
        )}
      </div>
    </li>
  );
}

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const handleOrderClick = () => {
    setIsOrderPlaced(true);
    // Navigate to the order success page
    navigate('/payU');
  };

  useEffect(() => {
    // Reset isOrderPlaced when navigating back to the home page
    setIsOrderPlaced(false);
  }, [location.pathname]);

  useEffect(() => {
    let timer;
    if (isOrderPlaced) {
      // Show arrow for 5 seconds when order is placed
      timer = setTimeout(() => {
        // setIsPizzaAdded(false); // This line is removed
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isOrderPlaced]);

  return (
    <footer className="footer">
      {isOpen && !isOrderPlaced && location.pathname === '/' ? (
        <>
          <Order closeHour={closeHour} openHour={openHour} onOrderClick={handleOrderClick} />
          {/* Add your existing Order button here */}
        </>
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour, onOrderClick }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn" onClick={onOrderClick}>
        Place Order
      </button>
    </div>
  );
}



// function OrderPage({ isOrderPlaced, setIsOrderPlaced }) {
//   useEffect(() => {
//     if (isOrderPlaced) {
//       alert('Hoooo! Your order is placed!');
//       setIsOrderPlaced(false); // Reset the state after showing the alert
//     }
//   }, [isOrderPlaced, setIsOrderPlaced]);

//   // Display nothing in the main content area
//   return null;
// }