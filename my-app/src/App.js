import './App.css';
import Cards from './components/Cards/Cards';
import Cards2 from './components/Cards/Cards2'
import MenuBar from './components/MenuBar/MenuBar';
import SearchBar from './components/SearchBar/SearchBar';

import {items} from './request/request'
import { useState } from 'react';





function App() {

  // const [positionIndexes,setPositionIndexes] = useState([0,1,2,3,4,6,7,8,9]);

  // const handleNext = () =>{
  //     setPositionIndexes((prevIndexes)=>{
  //         const updatedIndexes = prevIndexes.map((prevIndex)=>(prevIndex+1)%5);
  //         return updatedIndexes
  //     })
  // }

  return (
    <div className="App container m-auto  bg-black ">
      <div className='bg-gradient-to-r from-blue-950 via-blue-800 to-red-800 rounded-xl pointer-events-auto'>
        <div className='bg-cover bg-men'>
          <SearchBar />

            {/* {items.map((item,index)=>{
              return(
                < Cards {...item} key={item.id}/>
              )   
            })} */}
          <Cards2 />
          <MenuBar />
        </div>
     </div>
    </div>
  );
}

export default App;
