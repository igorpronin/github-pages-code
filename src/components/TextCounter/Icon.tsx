import React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Instagram from '../../icons/instagram.svg';
import Telegram from '../../icons/telegram.svg';

const useStyles = makeStyles({
  root: {
    width: 22,
    height: 22,
    marginRight: mr => mr ? `${mr}px` : 0,
  },
  logo: {
    width: '100%',
    maxHeight: '100%'
  }
});

export type TIcons = 'inst' | 'tg'

interface IProps {
  icon: TIcons,
  mr: number
}

function Icon(props: IProps) {
  const {icon, mr} = props;
  const classes = useStyles(mr);
  return (
    <Box className={classes.root}>
      {icon === 'inst' && <img className={classes.logo} src={Instagram} alt="img" />}
      {icon === 'tg' && <img className={classes.logo} src={Telegram} alt="img" />}
    </Box>
  );
}

export default Icon;
