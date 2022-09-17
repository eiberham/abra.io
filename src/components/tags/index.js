import React from 'react';
import './styles.scss';

export default function ({tags}) {
  const categories = tags.trim().split(',')
  return (
    <ul className="tags">
      {categories && categories.map(category => (
        <li className="tag" key={category} >
          <a href={`/posts?tag=${category}`} >{category}</a>
        </li>
      ))}
    </ul>
  )
}