// ToggleSwitch.tsx
import React, { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="ui-switch">
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="slider">
        <span className="circle"></span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
