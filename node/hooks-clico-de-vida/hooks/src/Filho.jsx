import React, { useEffect } from 'react';

const Filho = (props) => {
  const { count } = props;

  useEffect(() => {
    console.log('filho - update');

    return () => { console.log('filho - unupdate'); }
  });

  useEffect(() => {
    console.log('filho - mount');

    return () => { console.log('filho - unmount'); }
  },[]);

  useEffect(() => {
    console.log('filho - count', count);

    return () => { console.log('filho - uncount', count); }
  },[count]);

  return (
    <p className="filho">
      { count }
    </p>
  );
}

export default Filho;