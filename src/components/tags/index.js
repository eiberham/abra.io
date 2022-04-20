import React from 'react';
import './styles.scss';

export default function ({tags}) {
  const categories = tags.trim().split(',')
  return (
    <ul className="tags">
      {categories && categories.map(category => (
        <li className="tag">{category}</li>
      ))}
    </ul>
  )
}