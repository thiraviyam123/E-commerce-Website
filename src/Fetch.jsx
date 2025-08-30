import React, { useEffect, useState } from 'react';
import './Fetch.css';
function CartFooter({ cart, onOpenCart }) {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#222',
        color: 'white',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div>🛒 Cart Items: {cart.reduce((sum, item) => sum + item.quantity, 0)}</div>
      <div>
 <button
        onClick={onOpenCart}
        style={{
          backgroundColor: '#4CAF50',
          border: 'none',
          padding: '10px 20px',
          color: 'white',
          cursor: 'pointer',
          borderRadius: '5px',
          fontWeight: 'bold',
          fontSize: '16px',
        }}
        aria-label="View Cart"
      >
        View Cart
      </button>

      </div>
     
    </footer>
  );
}

function CartModal({ cart, onClose, onBuy, updateCart, removeFromCart }) {
  // Calculate total amount with quantity considered
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1100,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '8px',
          padding: '20px',
          maxWidth: '500px',
          width: '90%',
          maxHeight: '80vh',
          overflowY: 'auto',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            border: 'none',
            background: 'transparent',
            fontSize: '20px',
            cursor: 'pointer',
          }}
          aria-label="Close cart modal"
        >
          &times;
        </button>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cart.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '15px',
                    borderBottom: '1px solid #ddd',
                    paddingBottom: '10px',
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '50px', height: '50px', objectFit: 'contain', marginRight: '15px' }}
                  />
                  <div style={{ flexGrow: 1 }}>
                    <strong>{item.title}</strong>
                    <p style={{ margin: 0 }}>
                      ${item.price.toFixed(2)} x {item.quantity} = ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <button
                        onClick={() => updateCart(item.id, 'decrease')}
                        style={{
                          backgroundColor: '#ddd',
                          border: 'none',
                          padding: '5px 10px',
                          margin: '0 5px',
                          cursor: 'pointer',
                        }}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateCart(item.id, 'increase')}
                        style={{
                          backgroundColor: '#ddd',
                          border: 'none',
                          padding: '5px 10px',
                          margin: '0 5px',
                          cursor: 'pointer',
                        }}
                      >
                        +
                      </button>
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          backgroundColor: '#166e0eff',
                          border: 'none',
                          padding: '5px 10px',
                          marginLeft: '10px',
                          cursor: 'pointer',
                          color: 'white',
                          borderRadius: '4px',
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <h3>Total: ${totalAmount}</h3>
            <button
              onClick={onBuy}
              style={{
                backgroundColor: '#4CAF50',
                border: 'none',
                padding: '10px 20px',
                color: 'white',
                cursor: 'pointer',
                borderRadius: '5px',
                fontSize: '16px',
              }}
            >
              Buy
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  // Add to cart with quantity handling
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Update cart (increase/decrease quantity)
  const updateCart = (itemId, action) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === itemId) {
          if (action === 'increase') {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === 'decrease') {
            if (item.quantity > 1) {
              return { ...item, quantity: item.quantity - 1 };
            } else {
              return { ...item, quantity: 0 }; // Remove item if quantity is 0
            }
          }
        }
        return item;
      }).filter(item => item.quantity > 0) // Filter out items with quantity 0
    );
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Buy button handler
  const handleBuy = () => {
    alert(
      `Order confirmed! Total amount: $${cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ).toFixed(2)}`
    );
    setCart([]); // Clear cart after purchase
    setIsCartOpen(false); // Close modal
  };

  // Filter products by search term (case insensitive)
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div style={{ padding: '20px', paddingBottom: '100px' }}>
        <h2>Trending Product</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '8px',
            marginBottom: '15px',
            width: '100%',
            maxWidth: '400px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '8px',
                  padding: '10px',
                  width: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '360px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.44)',
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: '100px', height: '100px', objectFit: 'contain', margin: '0 auto' }}
                />
                <h4>{product.title}</h4>
                <p
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minHeight: '60px',
                  }}
                >
                  {product.description}
                </p>
                <strong style={{ textAlign: 'center' }}>${product.price}</strong>
                <button
                className='cart'
                  onClick={() => addToCart(product)}
                  style={{
                    marginTop: '10px',
                    padding: '8px 12px',
                    backgroundColor: '#45832dff',
                    border: 'none',
                    color: 'white',
                    borderRadius: '4px',
                    cursor: 'pointer',
                      
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>

      <CartFooter cart={cart} onOpenCart={() => setIsCartOpen(true)} />

      {isCartOpen && (
        <CartModal
          cart={cart}
          onClose={() => setIsCartOpen(false)}
          onBuy={handleBuy}
          updateCart={updateCart}
          removeFromCart={removeFromCart}
        />
      )}
    </>
  );
}

export default ProductList;
