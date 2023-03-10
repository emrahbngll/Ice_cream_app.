import './App.css';
import { useState } from 'react';

function App() {
  const [btnColor, setBtnColor] = useState('red');

  const [btnnColor, setBtnnColor] = useState('pink');

  const newBtnColor = btnColor === 'red' ? 'blue' : 'red'; //terneray operator

  const newBtnnColor = btnnColor === 'pink' ? 'orange' : 'pink';

  //inaktif state
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="App">
      <button
        disabled={isChecked}
        style={{ backgroundColor: isChecked ? 'gray' : btnColor }}
        onClick={() => setBtnColor(newBtnColor)}>
        Change to {newBtnColor}
      </button>

      <button
        disabled={isChecked}
        style={{ backgroundColor: isChecked ? 'gray' : btnnColor }}
        onClick={() => setBtnnColor(newBtnnColor)}>
        Change to {newBtnnColor}
      </button>

      <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
      <label>butonu inaktif yap</label>
    </div>
  );
}

export default App;
