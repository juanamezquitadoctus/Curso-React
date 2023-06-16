import { useState } from 'react';

export const GifExpertApp = () => {

  const [ categories, setcategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = () => {
    // categories.push( 'Naruto' );
    // setcategories([
    //   ...categories,
    //   'Naruto'
    // ]);
    setcategories( cat => [ 'Naruto', ...cat  ] );
  }

  console.log(categories);

  return (
   <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>

    {/* Input */}

    {/* Listado de Gif */}
    <button onClick={ onAddCategory }>Agregar</button>
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