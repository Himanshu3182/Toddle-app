// App.js
import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Module from './components/Module/Module';
import FileUpload from './components/FileUpload/FileUpload';
import LinkResource from './components/LinkResource/LinkResource';
import CourseContextProvider, { CourseContext } from './context/CourseContext';
import './App.css';

const App = () => {
  return (
    <CourseContextProvider>
      <div className="app">
        <Header />
        <Sidebar />
        <main className="content">
          <FileUpload />
          <LinkResource />
          <CourseContext.Consumer>
            {({ modules }) => (
              modules.map(module => <Module key={module.id} module={module} />)
            )}
          </CourseContext.Consumer>
        </main>
      </div>
    </CourseContextProvider>
  );
};

export default App;
