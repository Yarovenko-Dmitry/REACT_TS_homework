import React, {FC} from "react";
import s from './SecondHomework.module.css';
import {SecondHomeworkTaskType} from './secondHomeworkTodolistState';
import {FilterType} from '../../App';

type SecondHomeworkType = {
  tasks: Array<SecondHomeworkTaskType>,
  removeTask: (id: number) => void,
  toggleFilter: (toggle: FilterType) => void
}

const SecondHomework: FC<SecondHomeworkType> = (props) => {
  let a = props.tasks;
  console.log(a)

  const secondHomeworkTodolist123 = props
    .tasks
    .map((t: SecondHomeworkTaskType) => {

      const OnRemoveTask = () => {
        props.removeTask(t.id);
      }


      return (
        <div className={s.SecondTaskOneTask} key={t.id}>
          <span className={s.SecondTaskOneTaskName}>{t.name}</span>
          <span className={s.SecondTaskOneTaskPriority}>{t.priority}</span>
          <button onClick={OnRemoveTask}>Delete task</button>
        </div>
      )
    })

  return (
    <div className={s.SecondHomework}>
      <h3>Second homework</h3>
      {secondHomeworkTodolist123}
      <div className={s.SecondTaskPriorityButtonsConteiner}>
        <button onClick={() => {
          props.toggleFilter('All');
        }}>All
        </button>
        <button onClick={() => {
          props.toggleFilter('Hight');
        }}>Hight
        </button>
        <button onClick={() => {
          props.toggleFilter('Middle');
        }}>Middle
        </button>
        <button onClick={() => {
          props.toggleFilter('Low');
        }}>Low
        </button>
      </div>
    </div>
  )
}

export default SecondHomework;