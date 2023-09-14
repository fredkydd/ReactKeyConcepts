/* eslint-disable react/prop-types */
'use strict';
import './Concepts.css';
import ConceptItem from './ConceptItem';

const Concepts = ({ concepts }) => {
  return (
    <section id="concepts">
      {concepts.map((keys) => (
        <ConceptItem
          key={keys.id}
          title={keys.title}
          image={keys.image}
          description={keys.description}
        />
      ))}
    </section>
  );
};

export default Concepts;
