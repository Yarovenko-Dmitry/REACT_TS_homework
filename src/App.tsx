import React from 'react';
// import './App.css';
import FirstTask from './tasks/FirstTask/FirstTask';
import firstTaskStore from './tasks/FirstTask/FirstTask-store';

function App() {
  return (
    <div>
      <FirstTask
        userName={firstTaskStore.userName}
        userMessage={firstTaskStore.userMessage}
        time={firstTaskStore.time}/>
    </div>
  );
}

export default App;
