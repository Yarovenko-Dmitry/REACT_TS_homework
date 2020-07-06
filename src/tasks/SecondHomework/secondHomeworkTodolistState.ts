export type SecondHomeworkTaskType = {
  id: number,
  name: string,
  priority: string
}

const secondHomeworkTodolistState: Array<SecondHomeworkTaskType> = [
  {id: 1, name: "Работа", priority: "Hight"},
  {id: 2, name: "Прокрастинация", priority: "Low"},
  {id: 3, name: "Релакс", priority: "Middle"},
  {id: 4, name: "Реакт", priority: "Hight"},
  {id: 5, name: "Хтмл", priority: "Low"}
];

export default secondHomeworkTodolistState;