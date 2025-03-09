import React from "react";

const MenuItemCard = () => {
  const menuItem = {
    image: "https://via.placeholder.com/150", // Replace with actual food image URL
    name: "Spaghetti Carbonara",
    price: "$12.99",
    cuisine: "Italian",
    spiceLevel: "Mild",
  };

  return (
    <div style={styles.card}>
      <img src={menuItem.image} alt={menuItem.name} style={styles.image} />
      <h2 style={styles.name}>{menuItem.name}</h2>
      <p style={styles.price}>{menuItem.price}</p>
      <p><strong>Cuisine:</strong> {menuItem.cuisine}</p>
      <p><strong>Spice Level:</strong> {menuItem.spiceLevel}</p>
    </div>
  );
};

// Inline CSS styles
const styles = {
  card: {
    width: "300px",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff8e1",
    margin: "20px auto",
    border: "2px solid #ffa500",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  name: {
    color: "#d35400",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2c3e50",
  },
};

export default MenuItemCard;

