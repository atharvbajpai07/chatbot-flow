
import React from 'react';

const SettingsPanel = ({ node, setNodes }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    setNodes((nodes) =>
      nodes.map((n) => (n.id === node.id ? { ...n, data: { ...n.data, label: value } } : n))
    );
  };

  if (!node) return null;

  return (
    <div className="settings-panel">
      <h3>Message</h3>
      <input type="text" value={node.data.label} onChange={handleChange} />
    </div>
  );
};

export default SettingsPanel;
