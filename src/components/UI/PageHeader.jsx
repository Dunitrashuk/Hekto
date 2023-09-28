import React from 'react';
import classes from './PageHeader.module.css';

function PageHeader(props) {
  return (
    <div className={classes.header}>
        <div className={classes.header__content}>
            <h3 className='heading-3'>{props.title}</h3>
        </div>
    </div>
  )
}

export default PageHeader