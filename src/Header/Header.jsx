

import * as React from 'react';

import s from './Header.scss';

type Props = {
  text: string|number
}

export const Header = (props) => {

  return (
    <h1 className={s.header}>My Header says {props.text}</h1>
  )
}



export default Header;
