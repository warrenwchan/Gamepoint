import React, { Component } from 'react';
import styles from './styles.css';

const CategoryButton = ({ title, single }) => (
  <button onClick={single} className="catButton">
    <p>{title}</p>
  </button>
);

export default CategoryButton;
