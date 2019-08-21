import React from 'react'
import ColorBox from './ColorBox'
import { Collapse } from '@material-ui/core';
function SingleColorPalette(props) {
    //console.log(props.palette.colors)
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
   key ={col.id}
   name = {col.name}
  background={col.hex}
   showLink = {false}

   />)
    return (
        <div className = 'Palette'>
           <h1>Single Color Palette</h1>
           <div className ='Palette-colors'>{colorBox}</div>
        </div>
    )
}

export default SingleColorPalette
