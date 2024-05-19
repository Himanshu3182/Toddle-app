// src/components/CourseBuilder.js
import React, { useContext } from 'react';
import { CourseContext } from '../context/CourseContext';
import Module from './Module';
import AddModule from './AddModule';

const CourseBuilder = () => {
  const { modules } = useContext(CourseContext);

  return (
    <div>
      <h1>Course Builder</h1>
      <AddModule />
      {modules.map(module => (
        <Module key={module.id} module={module} />
      ))}
    </div>
  );
};

export default CourseBuilder;
