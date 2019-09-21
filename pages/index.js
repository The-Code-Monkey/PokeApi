import React from 'react'
import axios from 'axios';
import fetch from 'isomorphic-unfetch';

import '../index.scss';

import AutoComplete from "../components/autoComplete";

const Home = props => {
  
  const [list, setList] = React.useState(props.list);
  const [selectedPoke, setSelectedPoke] = React.useState(null);
  
  function onSelect(poke) {
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.get(poke.url)
      .then(res => {
        setSelectedPoke(res.data);
        window.location.hash = "";
        window.location.hash = "#poke-card";
      })
  }
  
  return (
    <>
      <img src={"/static/logo.png"} className={"logo"} />
      {/*<img src={"/static/pokemon.jpg"} className={"pokemon"} />*/}
      <div className={"search-wrapper"}>
        <AutoComplete options={list} onSelect={poke => onSelect(poke)} />
      </div>
      {selectedPoke !== null &&
        <>
          <div id={'poke-card'} className="poke-card">
            <h4>{selectedPoke.name.substr(0)[0].toUpperCase()}{selectedPoke.name.substring(1).toLowerCase()} - {selectedPoke.id >= 100 ? selectedPoke.id : selectedPoke.id >= 10 ? `0${selectedPoke.id}` : `00${selectedPoke.id}`}</h4>
            <div className="row mt-2">
              <div className="col-6">
                <p>Normal</p>
                <img src={selectedPoke.sprites.front_default} className={"img-fluid"} />
              </div>
              <div className="col-6">
                <p>Shiny</p>
                <img src={selectedPoke.sprites.front_shiny} className={"img-fluid"} />
              </div>
            </div>
            <div className="row">
              <div className="col-12 mt-2">
                <h5>Abilities</h5>
                <div className="row">
                {selectedPoke.abilities.map((ability, i) => (
                  <div className="col-6 ability">
                    <p>Name: {ability.ability.name}</p>
                  </div>
                ))}
                </div>
                <hr />
              </div>
              <div className="col-12 mt-2">
                <h5>Moves</h5>
                <div className="row">
                  {selectedPoke.moves.map((move, index) => (
                    <div className="col-3 move">
                      <p>Name: {move.move.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
};

Home.getInitialProps = async ({ req }) => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=964');
  const list = await res.json();
  
  return { list: list.results };
};

export default Home;
