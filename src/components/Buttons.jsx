import React from 'react';

const Buttons = () => {
  const button={
    position: "absolute",
    marginLeft: '100',
    marginTop: '380'
  }
  const button2={
    position: "absolute",
    marginLeft: '150',
    marginTop: '380'
  }
  const button3={
    position: "absolute",
    marginLeft: '200',
    marginTop: '380'
  }
  return(
    <div>
      <button style={button}>Play</button><button style={button2}>Feed</button><button style={button3}>Sleep</button>
    </div>
  )
}

export default Buttons;
