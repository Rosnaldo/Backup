import React, { useEffect, memo } from 'react';

const Filho2 = memo((props) => {
  const { cb } = props;

  useEffect(() => {
    console.log('filho2 update');

    return () => { console.log('filho2 unupdate'); }
  });

  useEffect(() => {
    console.log('filho2 mount');

    return () => { console.log('filho2 unmount'); }
  },[]);

  return (
    <button onClick={() => cb()}>Count</button>
  );
});

export default Filho2;