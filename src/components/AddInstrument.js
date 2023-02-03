/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addInstrument } from '../api/api';

const initialState = {
  name: '',
  description: '',
  image: '',
  category: '',
  price: '',
  user_id: '',
  errors: {},
};

export const newInstrumentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      return { ...state, [action.field]: action.value };
    case 'VALIDATE_FORM':
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};

const AddInstrument = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    category: '',
    price: '',
    user_id: '',
    errors: {},
  });

  // error state
  const [usernameError, setUsernameError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [imageError, setImageError] = useState('');
  const [priceError, setPriceError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name) {
      setUsernameError('instrument name is required');
    } else {
      setUsernameError('');
    }
    if (!formData.description) {
      setDescriptionError('Description is required');
    } else {
      setDescriptionError('');
    }
    if (!formData.category) {
      setCategoryError('Category required');
    } else {
      setCategoryError('');
    }
    if (!formData.image) {
      setImageError('Image url required');
    } else {
      setImageError('');
    }
    if (!formData.price) {
      setPriceError('Price required');
    } else {
      setPriceError('');
    }
    const newinstrument = {};
    newinstrument.name = formData.name;
    newinstrument.description = formData.description;
    newinstrument.image = formData.image;
    newinstrument.category = formData.category;
    newinstrument.price = formData.price;
    const user = JSON.parse(localStorage.getItem('user'));
    newinstrument.user_id = user.id;
    dispatch(addInstrument(newinstrument, setSuccessMessage));
  };

  return (
    <div className="homepage d-flex w-100 justify-content-center">
      <div className="card">
        <div className="card-header">Add Instrument</div>
        <div className="card-body">
          <div className="text-success">{successMessage && successMessage}</div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="label" className="form-label">Name</label>
              <input
                id="name"
                type="text"
                className="form-control"
                value={formData.name}
                onChange={(event) => handleChange('name', event.target.value)}
              />
              {usernameError && (
                <small className="text-danger">{usernameError}</small>
              )}
            </div>
            <div>
              <label htmlFor="label" className="form-label">Description</label>
              <input
                id="description"
                type="text"
                className="form-control"
                value={formData.description}
                onChange={(event) => handleChange('description', event.target.value)}
              />
              {descriptionError && (
                <small className="text-danger">{descriptionError}</small>
              )}
            </div>
            <div>
              <label htmlFor="label" className="form-label">Category</label>
              <input
                id="category"
                type="text"
                className="form-control"
                value={formData.category}
                onChange={(event) => handleChange('category', event.target.value)}
              />
              {categoryError && (
                <small className="text-danger">{categoryError}</small>
              )}
            </div>
            <div>
              <label htmlFor="label" className="form-label">Image</label>
              <input
                id="image"
                type="text"
                className="form-control"
                value={formData.image}
                onChange={(event) => handleChange('image', event.target.value)}
              />
              {imageError && (
                <small className="text-danger">{imageError}</small>
              )}
            </div>
            <div>
              <label htmlFor="label" className="form-label">Price</label>
              <input
                id="price"
                type="number"
                className="form-control"
                value={formData.price}
                onChange={(event) => handleChange('price', event.target.value)}
              />
              {priceError && (
                <small className="text-danger">{priceError}</small>
              )}
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddInstrument;
