import React from "react";
import s from './FirstTask.module.css';
import friend from './assets/friend.jpg'
import {firstTaskStoreType} from './FirstTask-store';

const FirstTask = (props: firstTaskStoreType) => {
  return (
    <div className={s.popupMessage}>
      <img className={s.imgFriend} src={friend}/>
      <span className={s.messageContainer}>
        <span className={s.messagePanel}>
          <span className={s.userName}>{props.userName}</span>
          <span className={s.userMessage}>{props.userMessage}</span>
        </span>
        <span className={s.time}>{props.time}</span>
      </span>
    </div>
  )
}

export default FirstTask;