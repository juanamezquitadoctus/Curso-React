 const apiKey = 'IJOenGlf1E4kdldSCQ4s59BP2r9jsKeo';

 const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

 peticion
    .then( resp => resp.json() )
    .then( ({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warm );