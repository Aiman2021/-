import { ChangeEvent, MouseEvent } from 'react';
import { FilterValuesType } from './App';
import { AddItemForm } from './AddItemForm';
import { EditableSpan } from './EditableSpan';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Checkbox } from '@mui/material';

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
}

type PropsType = {
  id: string;
  title: string;
  tasks: Array<TaskType>
  removeTask: (taskId: string, todolistId: string) => void
  changeFilter: (value: FilterValuesType, todolistId: string) => void
  addItem: (title: string, todolistId: string) => void;
  changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void;
  filter: FilterValuesType;
  changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void;
  removeTodolist: (todolistId: string) => void
  changeTodolistTitle: (id: string, newTitle: string) => void;
}

export function Todolist(props: PropsType) {

  const onAllClickHandler = () => props.changeFilter('all', props.id);
  const onActiveClickHandler = () => props.changeFilter('active', props.id);
  const onCompletedClickHandler = () => props.changeFilter('completed', props.id);

  const removeTodolist = () => {
    props.removeTodolist(props.id);
  }

  const addItem = (title: string) => {
    props.addItem(title, props.id);
  }

  const changeTodolistTitle = (newTitle: string) => {
    props.changeTodolistTitle(props.id, newTitle);
  }

  return <>
    <h3>
      <EditableSpan title={props.title}
        onChange={changeTodolistTitle} />
      <Button variant="outlined" startIcon={<DeleteIcon />} onClick={removeTodolist} />
    </h3>

    <AddItemForm addItem={addItem} />

    <div>
      {
        props.tasks.map(t => {

          const onRemoveHandler = (e: MouseEvent<HTMLButtonElement>) =>
            props.removeTask(t.id, props.id);

          const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) =>
            props.changeTaskStatus(t.id, e.currentTarget.checked, props.id);

          const onChangeTitleHandler = (newValue: string) =>
            props.changeTaskTitle(t.id, newValue, props.id);


          return <div key={t.id} className={t.isDone ? 'is-done' : ""}>
            <Checkbox onChange={onChangeStatusHandler} checked={t.isDone} color="primary" />
            <EditableSpan title={t.title} onChange={onChangeTitleHandler} />
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={onRemoveHandler} />
          </div>
        })
      }
    </div>

    <div>
      <Button color={"inherit"} variant={props.filter === 'all' ? 'contained' : 'text'}
        onClick={onAllClickHandler}>All</Button>
      <Button color={'primary'} variant={props.filter === 'active' ? 'contained' : 'text'}
        onClick={onActiveClickHandler}>Active</Button>
      <Button color={'secondary'} variant={props.filter === 'completed' ? 'contained' : 'text'}
        onClick={onCompletedClickHandler}>Completed</Button>
    </div>
  </>;
}


