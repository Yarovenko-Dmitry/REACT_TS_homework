import React, {useState} from 'react';
// import './App.css';
import FirstHomework from './tasks/FirstHomework/FirstHomework';
import SecondHomework from './tasks/SecondHomework/SecondHomework';
import secondHomeworkTodolistState, {SecondHomeworkTaskType} from './tasks/SecondHomework/secondHomeworkTodolistState';
import {firstHomeworkSsss} from './tasks/FirstHomework/FirstHomeworkSsss';

export type FilterType = 'All' | 'Hight' | 'Middle' | 'Low';

function App() {

  let [tasks, setTasks] = useState<Array<SecondHomeworkTaskType>>(secondHomeworkTodolistState);

  let [filter, setFilter] = useState<FilterType>('All');

  function removeTask(id: number) {
    let filtredTasks = tasks.filter(t => t.id !== id);
    setTasks(filtredTasks);
  }

  function toggleFilter(toggle: FilterType) {
    setFilter(toggle)
  }

  let tasksToRender = tasks;

  if (filter === 'Hight') {
    tasksToRender = tasksToRender.filter(t => t.priority === 'Hight');
  }
  if (filter === 'Middle') {
    tasksToRender = tasksToRender.filter(t => t.priority === 'Middle');
  }
  if (filter === 'Low') {
    tasksToRender = tasksToRender.filter(t => t.priority === 'Low');
  }
  if (filter === 'All') {
    tasksToRender = tasksToRender.filter(t => t.priority !== 'All');
  }

  return (
    <div>
      <SecondHomework
        tasks={tasksToRender}
        removeTask={removeTask}
        toggleFilter={toggleFilter}
      />
      <FirstHomework
        userName={firstHomeworkSsss.userName}
        userMessage={firstHomeworkSsss.userMessage}
        time={firstHomeworkSsss.time}/>
    </div>
  );
}

export default App;
