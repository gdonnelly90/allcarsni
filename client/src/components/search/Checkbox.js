import React, { useState } from 'react';

export const Checkbox = ({ label, checked, ...props }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <div className='checkbox-wrapper'>
      <label>
        <input
          type='checkbox'
          ischecked={checked}
          onChange={() => setChecked((prev) => !prev)}
          {...props}
        />
        <span>{label}</span>
      </label>
      {/* <p>{checked ? 'Selected' : 'Unchecked'}</p> */}
    </div>
  );
};
