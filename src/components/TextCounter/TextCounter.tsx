import React, { useState } from 'react';
import {TextField, Box} from '@material-ui/core';
import Icon from './Icon';
import {makeStyles} from '@material-ui/core/styles';
import CountItem from "./CountItem";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icons: {
    padding: '18.5px 14px',
    width: 400
  }
});

function TextCounter() {
  const classes = useStyles();
  const storedValue = localStorage.getItem('text_counter_text');
  const defaultValue = storedValue ? storedValue : '';
  const [symbols, setSymbols] = useState(defaultValue.length);
  const onChange = (e: any) => {
    setSymbols(e.target.value.length);
    localStorage.setItem('text_counter_text', e.target.value);
  }
  return (
    <Box className={classes.root}>
      <Box className="mb-12">Symbols: {symbols}</Box>
      <TextField
        onChange={onChange}
        id="base-textcounter-input"
        label="Enter text"
        multiline
        minRows={3}
        maxRows={Infinity}
        defaultValue={defaultValue}
        variant="outlined"
      />
      <Box className={classes.icons}>
        <CountItem icon="inst" symbols={symbols} maxSymbols={2184} />
        <CountItem icon="tg" symbols={symbols} maxSymbols={4096} />
      </Box>
    </Box>
  );
}

export default TextCounter;
