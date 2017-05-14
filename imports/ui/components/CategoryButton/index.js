import React, { Component } from 'react';
import styles from './styles.css';

const CategoryButton = ({ title }) => (
  <div className="catButton">
    <p>{title}</p>
  </div>
);

export default CategoryButton;
