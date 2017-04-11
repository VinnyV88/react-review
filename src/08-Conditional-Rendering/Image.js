import React from 'react';

function Image(props) {
  return (
    <img
      src={props.source}
      style={{width: '200px', margin: '10px'}}
      />
  );
}

export default Image;
