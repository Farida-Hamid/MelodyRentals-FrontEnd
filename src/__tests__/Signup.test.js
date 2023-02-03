/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 * @jest-environment jsdom
 */
import React from 'react';

import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/';

describe('Signup component', () => {
  test('Should render the Signup component', () => {
    const signup = renderer.create(
      <React.StrictMode>
        <div>
          <h1>Signup</h1>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input type="password" name="password_confirmation" id="password_confirmation" />
            <button type="button">Sign up</button>
          </div>
        </div>
      </React.StrictMode>,
    ).toJSON();
    expect(signup).toMatchSnapshot();
  });
});
