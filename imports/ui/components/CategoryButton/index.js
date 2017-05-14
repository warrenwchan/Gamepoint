import React, { Component } from 'react';
import styles from './styles.css';

const CategoryButton = ({ title }) => (
  <button className="catButton">
    <p>{title}</p>
  </button>
);

export default CategoryButton;
