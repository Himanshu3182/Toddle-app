// src/components/AddResource.js
import React, { useState, useContext } from 'react';
import { CourseContext } from '../context/CourseContext';

const AddResource = ({ moduleId }) => {
  const [resourceName, setResourceName] = useState('');
  const [resourceType, setResourceType] = useState('link');
  const { addResource } = useContext(CourseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resourceName.trim()) {
      addResource(moduleId, { id: Date.now(), name: resourceName, type: resourceType });
      setResourceName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={resourceName} onChange={(e) => setResourceName(e.target.value)} placeholder="Resource Name" required />
      <select value={resourceType} onChange={(e) => setResourceType(e.target.value)}>
        <option value="link">Link</option>
        <option value="file">File</option>
      </select>
      <button type="submit">Add Resource</button>
    </form>
  );
};

export default AddResource;
