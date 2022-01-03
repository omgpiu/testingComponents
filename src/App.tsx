import React from 'react';
import './App.css';
import PokeSearch from './components/PokemonSearch/PokemonSearch';
import SubscribeForm from './components/SubscribeForm/SubscribeForm';

function App() {
    return (
        <div className="App">
            <SubscribeForm/>
            <PokeSearch/>
        </div>
    );
}

export default App;
