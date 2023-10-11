import React, { useState } from 'react'



function Square() {
    const [colour, setColour] = useState('blue')
    
    const ChangeColour = () => {
        const newColour=colour==='red'?'blue':'red'
        setColour(newColour);
    }

    const squareStyle = {
        width: '100px',
        height: '100px',
        backgroundColor:colour,
    }
    return (
      <>
        <div className="container"style={squareStyle}></div>
        <button onClick={ChangeColour}>Change me</button>
      </>
    );
}

export default Square
