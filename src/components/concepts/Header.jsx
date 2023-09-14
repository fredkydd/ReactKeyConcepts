/* eslint-disable react/prop-types */
'use strict';
import './Header.css';

export default function Header({ keyConceptsImage }) {
  return (
    <header>
      <img src={keyConceptsImage} alt="Medal badge with a star" />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
}
