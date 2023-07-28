import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [ categories, setcategories ] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return;

    // setcategories([
    //   ...categories,
    //   'Naruto'
    // ]);
    // categories.push( newCategory );
    setcategories([ newCategory, ...categories ]);
    // setcategories( cat => [ newCategory, ...cat  ] );
  }

  console.log(categories);

  return (
   <>
    <h1>GifExpertApp</h1>
    <AddCategory
      onNewCategory={ (value) => onAddCategory(value) }
    />
    {
      categories.map( category => (
        <GifGrid key={ category } category={ category } />
      ))
    }
   </>
  )
}