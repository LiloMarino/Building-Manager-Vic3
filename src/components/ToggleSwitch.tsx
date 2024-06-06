import React, { useState } from 'react';
import '../assets/styles/toggleswitch.css';

const ToggleSwitch: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isChecked} onChange={handleToggle} />
      <span className="toggle-switch-background">
        <span className="toggle-switch-handle"></span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
