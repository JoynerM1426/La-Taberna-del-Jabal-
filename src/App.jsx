
import { useState, useEffect } from 'react';
import axios from 'axios';
import Drinks from './components/Drinks';
import Message from './components/Message';
import './App.css'

function App() {
  const [dataDrink, setDataDrink] = useState([]);
  const [name, setName] = useState(" ");
  useEffect(() => {
    getData();
  }, [name]);
  const getData = () => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((resp) => {
        setDataDrink(resp.data.drinks);
      })
      .catch((error) => 
      {
        console.error(error);
    });
  };
  const changeDrink = (e) => {
    e.preventDefault();
    setName(e.target[0].value.toLowerCase());
  };

  return (
    <div className="App">
      <div  className='title'>
      <h1>La Taberna del Jabalí</h1>
      </div>
    
     <form  className='form' onSubmit={(e) => changeDrink(e)}>
        <input  className="input" type="text" placeholder='Write your favorite Drink' />
        <button className='button' type="submit"><i class="fa-solid fa-magnifying-glass zoom"></i></button>
      </form>
      { dataDrink ?
        dataDrink.sort(function(x, y){
          if(x.strDrink < y.strDrink){
            return -1;
          }
          if(x.strDrink > y.strDrink){
            return 1;
          }
          return 0
        }).map((data, index) => 
        (<Drinks key={index} nameData={data} />))
        : <Message/>
      }
    </div>
  )
}

export default App
