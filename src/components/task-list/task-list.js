import React from 'react';
import classNames from 'classnames';

import Task from '../task';
import NewTaskForm from '../new-task-form';

export default function TaskList({ tasksData, destroyTask, editTask, onEditTask, completeTask }) {
  let elements = tasksData.map((item) => {
    const { id, description, leftTime, completed, hidden, editing } = item;
    let className = classNames({
      completed: completed && !editing,
      editing: editing,
    });
    if (hidden) return '';
    if (className === 'editing') {
      return (
        <li key={id} className={className}>
          <Task
            description={description}
            destroyTask={() => destroyTask(id)}
            completeTask={() => completeTask(id)}
            editTask={() => editTask(id)}
            completed={completed}
            leftTime={leftTime}
          />
          <NewTaskForm handler={onEditTask} id={id} value={description} />
        </li>
      );
    }
    return (
      <li key={id} className={className}>
        <Task
          description={description}
          leftTime={leftTime}
          destroyTask={() => destroyTask(id)}
          completeTask={() => completeTask(id)}
          editTask={() => editTask(id)}
          completed={completed}
        />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
}
