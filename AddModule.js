// src/components/AddModule.js
import React, { useState, useContext } from 'react';
import { CourseContext } from '../context/CourseContext';

const AddModule = () => {
  const [moduleName, setModuleName] = useState('');
  const { addModule } = useContext(CourseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (moduleName.trim()) {
      addModule(moduleName);
      setModuleName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={moduleName} onChange={(e) => setModuleName(e.target.value)} placeholder="New Module Name" required />
      <button type="submit">Add Module</button>
    </form>
  );
};

export default AddModule;
