import React from 'react';
import {Link} from 'react-router-dom'
import {usePalleteListStyles} from './useAllStyles'
import MiniPalette from './MiniPalette'
function PaletteList(props) {
	const classes =usePalleteListStyles()
//console.log(props)
	function goToPalette(id){
		//props.history.push(`/palette/${id}`)
		props.history.push(`/palette/${id}`)
	}
	return (
		<div className ={classes.root}>
		<div className ={classes.container}>
			<nav className = {classes.nav}>
			<h1>React Colors</h1>
			<Link to ='/palette/new'>Create Pallete</Link>
			</nav>
			<div className = {classes.palettes}>
			{props.palettes.map((pal) =>
                 {return <MiniPalette {...pal} handleClick={()=>goToPalette(pal.id)}/>})}
			</div>
		</div>
			
           
		</div>
	);
}

export default PaletteList;
