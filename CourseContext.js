// CourseContext.js
import React, { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CourseContext = createContext();

const CourseContextProvider = ({ children }) => {
  const [modules, setModules] = useState([]);

  const addModule = () => {
    setModules([...modules, { id: uuidv4(), name: 'New Module', resources: [] }]);
  };

  const renameModule = (id, name) => {
    setModules(modules.map(module => module.id === id ? { ...module, name } : module));
  };

  const deleteModule = (id) => {
    setModules(modules.filter(module => module.id !== id));
  };

  const addFile = (name, data) => {
    // Logic to add file as resource
  };

  const addLink = (link) => {
    // Logic to add link as resource
  };

  const renameResource = (id, name) => {
    // Logic to rename resource
  };

  const deleteResource = (id) => {
    // Logic to delete resource
  };

  const moveResource = (resourceId, toModuleId) => {
    // Logic to move resource between modules
  };

  return (
    <CourseContext.Provider
      value={{
        modules,
        addModule,
        renameModule,
        deleteModule,
        addFile,
        addLink,
        renameResource,
        deleteResource,
        moveResource,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
