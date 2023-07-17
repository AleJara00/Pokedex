import Card from '../src/componentes/Card'

function App() {
  return (
    <div className="App">
       <Card url='https://pokeapi.co/api/v2/pokemon/4'/>
       <Card url='https://pokeapi.co/api/v2/pokemon/1'/>
       <Card url='https://pokeapi.co/api/v2/pokemon/2'/>
       <Card url='https://pokeapi.co/api/v2/pokemon/3'/>
       <Card url='https://pokeapi.co/api/v2/pokemon/5'/>
       <Card url='https://pokeapi.co/api/v2/pokemon/6'/>
       <Card url='https://pokeapi.co/api/v2/pokemon/7'/>
       <Card url='https://pokeapi.co/api/v2/pokemon/8'/>
       <Card url='https://pokeapi.co/api/v2/pokemon/9'/>
       <Card url='https://pokeapi.co/api/v2/pokemon/10'/>
    </div>
  );
}

export default App;
