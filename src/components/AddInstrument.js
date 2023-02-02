import React from "react";
import { useState } from "react";
import { addInstrument } from "../api/api";
import { useDispatch } from "react-redux";

const initialState = {
  name: "",
  description: "",
  image: "",
  category: "",
  price: "",
  user_id: "",
  errors: {},
};

export const newInstrumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return { ...state, [action.field]: action.value };
    case "VALIDATE_FORM":
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};

const AddInstrument = () => {
  const [touched, setTouched] = useState({
    name: false,
    description: false,
    image: false,
    category: false,
    price: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "www/google.com",
    category: "",
    price: "",
    user_id: "",
    errors: {},
  });
  const dispatch = useDispatch();

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    // validateForm();
    console.log("Fix me");
  };

  const validateForm = () => {
    // TODO
    console.log("Fix me");
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
    const newinstrument = {};
    newinstrument.name = formData.name;
    newinstrument.description = formData.description;
    newinstrument.image = formData.image;
    newinstrument.category = formData.category;
    newinstrument.price = formData.price;
    // TODO
    newinstrument.user_id = 5;
    dispatch(addInstrument(newinstrument));
  };

  const hasError = (field) => touched[field] && formData.errors[field];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Add Instrument</h1>
        </div>
        <div>
          <label>Name</label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(event) => handleChange("name", event.target.value)}
            // onBlur={() => handleBlur("name")}
          />
          {hasError("name") && <p>{formData.errors.name}</p>}
        </div>
        <div>
          <label>Description</label>
          <input
            id="description"
            type="text"
            value={formData.description}
            onChange={(event) =>
              handleChange("description", event.target.value)
            }
            // onBlur={() => handleBlur("description")}
          />
          {hasError("description") && <p>{formData.errors.name}</p>}
        </div>
        <div>
          <label>Category</label>
          <input
            id="category"
            type="text"
            value={formData.category}
            onChange={(event) => handleChange("category", event.target.value)}
            // onBlur={() => handleBlur("category")}
          />
          {hasError("category") && <p>{formData.errors.name}</p>}
        </div>
        <div>
          <label>Price</label>
          <input
            id="price"
            type="text"
            value={formData.price}
            onChange={(event) => handleChange("price", event.target.value)}
            // onBlur={() => handleBlur("price")}
          />
          {hasError("price") && <p>{formData.errors.name}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddInstrument;
