import { AlarmAdd } from '@mui/icons-material';
import { IconButton, TextField } from '@mui/material';
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
      addItem();
    }
  };

  const addItem = () => {
    if (title.trim() !== "") {
      props.addItem(title.trim());
      setTitle('');
    } else {
      setError("Title is required");
    }
  };

  return <div>
    <TextField
      variant={'outlined'}
      label={'Type value'}
      value={title}
      onChange={onChangeHandler}
      onKeyUp={onKeyUpHandler}
      error={!!error} 
      helperText={error}/>
    <IconButton onClick={addItem} color={'primary'}><AlarmAdd /></IconButton>
  </div>;
}
