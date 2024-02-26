import { ChangeEvent, KeyboardEvent, useState } from 'react';

type AddItemFormPropsType = {
  addItem: (title: string) => void;
 };

export function AddItemForm(props: AddItemFormPropsType) {
 
  let [title, setTitle] = useState('');
  let [error, setError] = useState<string | null>(null);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.key === 'Ctrl+Enter' || e.key === 'Enter') {
      addTask();
    }
  };

  const addTask = () => {
      if (title.trim() !== "") {
      props.addItem(title.trim());
      setTitle('');
    } else {
      setError("Title is required");
    }
  };

  return <div>
    <input
      value={title}
      onChange={onChangeHandler}
      onKeyUp={onKeyUpHandler}
      className={error ? 'error' : ""} />
    <button onClick={addTask}>+</button>
    {error && <div className='error-message'>{error}</div>}
  </div>;
}
