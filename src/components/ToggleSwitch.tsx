import React from 'react';

interface Props {
  onToggle: Function
}

const ToggleSwitch = ({ onToggle }: Props) => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" onChange={onToggle} />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default ToggleSwitch;
