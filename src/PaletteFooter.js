import React from 'react'
import {usePalleteFooterStyles} from './useAllStyles'
function PaletteFooter(props) {
    const classes = usePalleteFooterStyles()
    return (
        <footer className={classes.paletteFooter}>
        {props.paletteName}
        <span className={classes.emoji}>{props.emoji}</span>
    </footer>
    )
}

export default PaletteFooter
