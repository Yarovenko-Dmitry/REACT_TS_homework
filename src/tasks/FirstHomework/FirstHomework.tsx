import React from "react";
import s from './FirstHomework.module.css';
import friend from './assets/friend.jpg'
import {firstHomeworkStateType} from './FirstHomeworkSsss';

const FirstHomework = (props: firstHomeworkStateType) => {
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

export default FirstHomework;

