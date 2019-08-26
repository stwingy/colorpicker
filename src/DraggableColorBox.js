import React from 'react';
import { useDraggableStyles } from './useAllStyles';
import DeleteIcon from '@material-ui/icons/Delete';
function DraggableColorBox(props) {
	const classes = useDraggableStyles();
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      <div className={classes.boxContent}>
        <span> {props.name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={props.handleClick} />
      </div>
    </div>
  );
}

export default DraggableColorBox;
