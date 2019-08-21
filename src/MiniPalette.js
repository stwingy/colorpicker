import React from 'react'
//import { withStyles } from '@material-ui/styles';
import {withRouter} from 'react-router-dom'
import {useMiniPaletteStyles} from './useAllStyles'


 function MiniPalette({paletteName,emoji,colors,...props}){
  console.log(props)
    const classes = useMiniPaletteStyles();
    const miniColorBoxes =colors.map(col=>(
		<div className ={classes.minicolor}
		style ={{backgroundColor:col.color}}
        key = {col.name}></div>
	))
    return (
        <div  className ={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>{miniColorBoxes}</div>
            <h5 className = {classes.title}>{paletteName} <span className = {classes.emoji}>{emoji}</span></h5>
        </div>
    )
}
export default MiniPalette
