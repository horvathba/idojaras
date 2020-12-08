import React from 'react';
import './Marker.css';

const Marker = (props: any) => {
    const { color, name, id ,  } = props;
    return (
      <div className="marker"
        style={{ color : color, cursor: 'pointer'}} 
        title={name}
      />
    );
  };

  export default Marker;