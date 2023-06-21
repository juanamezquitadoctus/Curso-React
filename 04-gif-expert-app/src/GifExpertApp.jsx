import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [ categories, setcategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

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
    {/* Titulo */}
    <h1>GifExpertApp</h1>

    {/* Input */}
    <AddCategory
      // setcategories={ setcategories }
      onNewCategory={ (value) => onAddCategory(value) }
    />

    {/* Listado de Gif */}
    <ol>
      {
        categories.map( category => {
          return <li key={ category }>{ category }</li>
        } )
      }
      {/* <li>ABC</li> */}
    </ol>
      {/* Gif Item */}
   </>
  )
}