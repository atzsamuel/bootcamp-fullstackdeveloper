import React, { useState } from "react";

const WhitelistForm = () => {

  const [name, setName] = useState("");
  const [wish,setWish] = useState("");
  const [priority,setPriority] = useState(1);

  const handleChange = (e) => {
    //console.log([e.target.name]);
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "wish") {
      setWish(value);
    } else if (name === "priority") {
      setPriority(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${name} ${wish} ${priority}`);
    //console.log(name, wish, priority);
    setName("");
    setWish("");
    setPriority(1);
  }


  return (
    <>
      <h1>Wishlist Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input id="name" type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          wish:
          <textarea id="wish" type="text" name="wish" value={wish} onChange={handleChange} />
        </label>
        <label>
        priority:
          <select id="priority" name="priority" value={priority} onChange={handleChange}>
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
export default WhitelistForm;