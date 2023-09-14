/* eslint-disable react/prop-types */
'use strict';
import './Concepts.css';
import ConceptItem from './ConceptItem';

export default function Concepts({ concepts }) {
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
}
