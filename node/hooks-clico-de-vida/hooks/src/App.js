import React, { useState, useCallback } from 'react';
import Filho2 from './Fillho2';
import Filho from './Filho';

function App() {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState(['item']);

  const cb = useCallback(() => {
    setCount((c) => c + 1)
  }, []);

  return (
    <div className="App">
      <Filho2 cb={cb} />
      {arr.map((item) => (
        <Filho key={item} count={count} />
      ))}
      <button onClick={() => setArr((a) => [...a, `item${a.length}`])}>Add arr</button>
      <button onClick={() => setArr(() => [])}>Del arr</button>
    </div>
  );
}

export default App;
