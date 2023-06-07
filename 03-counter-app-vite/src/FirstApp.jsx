// const newMessage = () => {
//   message: 'Hola mundo',
//   title: 'Fernando'
// };

// const getwMessage = () => {
//   return ( 'Juan Camilo' );
// };

import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

  // console.log(props);

  return (
    <>
        <h1>{ title }</h1>
        {/* { <code>{ JSON.stringify( newMessage ) }</code> } */}
        <p>{ subTitle }</p>
        <p>{ name }</p>
    </>
  );
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'Juan Camilo Amézquita Franco',
  subTitle: 'No hay subtítulo',
  // title: 'No hay título',
}