import React from 'react';
import {Box} from '@material-ui/core';
import Icon from "./Icon";
import {makeStyles} from "@material-ui/core/styles";
import {TIcons} from './Icon';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  }
});

interface IProps {
  icon: TIcons
  maxSymbols: number
  symbols: number
}

function CountItem(props: IProps) {
  const {icon, symbols, maxSymbols} = props;
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Icon mr={10} icon={icon} />
      <span className="mr-10">{symbols <= maxSymbols ? '✅' : '❌'}</span>
      <span>Maximum symbols allowed: {maxSymbols}</span>
    </Box>
  );
}

export default CountItem;
