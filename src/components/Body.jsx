import React from 'react';
import Buttons from './Buttons'

const Body=()=> {

  const styles={
    height: "500px",
    width: "500px",
    border: "solid lightGreen 1px",
    borderRadius: "50%",
    backgroundColor: "lightGreen",
    position: 'relative',
  }

  const screens={
    height: "300px",
    width: "300px",
    position: "absolute",
    backgroundColor: "#f4f8ff",
    marginLeft: '100',
    marginTop: '100'
  }



  return(
    <div>
      <div style={styles}><div style={screens}></div><Buttons/></div>
    </div>
  )
};

export default Body;
