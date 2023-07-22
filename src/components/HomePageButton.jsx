import React from 'react';
import './HomePageButton.css';

function HomePageButton(props) {
  function handleClick() {
    if (props.onClick) {
      props.onClick();
    }
  }
  
  const buttonStyle = {
    backgroundColor: '#258f8c',
    color: '#fff',
    fontSize: '18px',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    position: 'absolute',
    ...props.location,
  };

  return (
    <button className="HomePageButton" style={buttonStyle} onClick={handleClick}>
      {props.label}
    </button>
  );
}

export default HomePageButton;