import React, { useState } from "react";

const WishlistForm2 = () => {

  const [formData, setFormData] = useState({
    name: "",
    wish: "",
    priority: 1
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${formData.name} ${formData.wish} ${formData.priority}`);
    setFormData({
      name: "",
      wish: "",
      priority: 1
    });
  }


  return (
    <>
      <h1>Wishlist Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          wish:
          <textarea id="wish" type="text" name="wish" value={formData.wish} onChange={handleChange} />
        </label>
        <label>
          priority:
          <select id="priority" name="priority" value={formData.priority} onChange={handleChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default WishlistForm2;