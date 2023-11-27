
import React, { useState } from 'react';
import './App.css';

export function App() {
  const buttonTitle = ['All', 'Done', 'In progress', 'Todo'];
  const [clickedButton, setClickedButton] = useState('');

  const handleClick = (el) => {
    setClickedButton(el);
  };

  return (
    <div className="App">
      <div>
        <h3 className='filter'> Filter by status </h3>
        {buttonTitle.map((el) => (
          <button
            key={el}
            className={clickedButton === el? 'btn btn-clicked' : 'btn'}
            onClick={() => handleClick(el)}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
