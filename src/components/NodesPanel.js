
import React from 'react';

const NodesPanel = ({ onAddNode }) => {
  return (
    <div className="nodes-panel">
      <button onClick={() => onAddNode('textNode')}>Message</button>
    </div>
  );
};

export default NodesPanel;
