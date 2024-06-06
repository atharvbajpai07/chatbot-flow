
import React from 'react';

const SaveButton = ({ onSave }) => {
  return (
    <div className="save-button">
      <button onClick={onSave}>Save Changes</button>
    </div>
  );
};

export default SaveButton;
