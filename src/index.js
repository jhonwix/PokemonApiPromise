
const url = "https://pokeapi.co/api/v2/pokemon?limit=15";
// // web api



function fetchKantoPokemon() {
    window
    .fetch(url)
        .then((respuesta)=> respuesta.json())
        .then((responseJson)=>{
            responseJson.results.forEach((pokemon) => {
                fetchPokemonData(pokemon)
                
            });
        });
        
}

function fetchPokemonData(pokemon) {
    let urlImage = pokemon.url;
    fetch(urlImage)
        .then((respuesta)=>respuesta.json())
        .then(function (pokeData) {
            const todosLosItems = [];

            const pokeName = document.createElement('h2');
            pokeName.textContent = `Nombre: ${pokeData.name}`;
            pokeName.className = "mx-auto"

            const pokeID = document.createElement('h2');
            pokeID.textContent = `Poder 1: ${pokeData.abilities[0].ability.name}`; 
            pokeID.className = "py-2"
            //document.body.appendChild(pokeID);

            const createImagen = () =>{
                const imagen = document.createElement('img')
                imagen.className = "mx-auto"
                imagen.width = '260';
                imagen.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeData.id}.png`
                return imagen;
            }
            const nuevaImagen = createImagen();
            //document.getElementById('images').appendChild(nuevaImagen);
            
            const container = document.createElement('div')
            container.append(pokeName,pokeID,nuevaImagen);
            todosLosItems.push(container);
            container.className = "box-border y-64 w-64 p-6 border-6 flex-row float-left border-4 rounded-lg shadow-2xl p-8"
            //float-left
            console.log(pokeData)
            document.body.append(...todosLosItems);
        })
        
}


fetchKantoPokemon();
