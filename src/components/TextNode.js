
import React from 'react';
import { Handle } from 'reactflow';

const TextNode = ({ id, data, isConnectable }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    data.setNodes((nds) =>
      nds.map((node) => (node.id === id ? { ...node, data: { ...node.data, label: value } } : node))
    );
  };

  return (
    <div className="text-node">
      <Handle type="target" position="top" isConnectable={isConnectable} />
      <input type="text" value={data.label} onChange={handleChange} />
      <Handle type="source" position="bottom" isConnectable={isConnectable} />
    </div>
  );
};

export default TextNode;
