import React from 'react'
import {Link } from 'react-router-dom'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import {usePalleteStyles} from './useAllStyles'
function SingleColorPalette(props) {
    //console.log(props.palette.colors)
    const [ format, setFormat ] = React.useState('hex');
    const classes =usePalleteStyles()
    function changeFormat(val) {
		setFormat(val);
		console.log(format, 'HAV', val);
	}
    function gatherShades(pal,filterColor){
let shades =[]
let allColors = pal.colors
for(let key in allColors){
    shades = shades.concat(
        allColors[key].filter(col=>col.id===filterColor)
    )
}
return(shades.slice(1))
    }
  const shades=gatherShades(props.palette,props.colorId)
   const colorBox = shades.map(col=><ColorBox
   key ={col.name}
   name = {col.name}
  background={col[format]}
   showingFullPalette = {false}

   />)
    return (
        <div className = {classes.Pallete}>
            <Navbar handleChange = {changeFormat} showingAllColors={false}/>
           
           <div className ={classes.colors}>
           {colorBox}
           <div className ={classes.goBack}>
               <Link to={`/palette/${props.palette.id}`} className = 'back-button'>Go Back</Link>
           </div>
           </div>
           <PaletteFooter paletteName ={props.palette.paletteName} emoji ={props.palette.emoji}/>
        </div>
    )
}

export default SingleColorPalette
