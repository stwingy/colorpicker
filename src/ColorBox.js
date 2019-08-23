import React,{useState} from 'react';
import {Link} from 'react-router-dom'
// import './ColorBox.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import chroma from 'chroma-js'
import {useColorBoxStyles} from './useAllStyles'
function ColorBox(props) {
	const classes = useColorBoxStyles(props);
	const[copied,setCopied] = useState(false)
const isDarkColor = chroma(props.background).luminance()<.2
const isLightColor = chroma(props.background).luminance()>.2
	function changeCopyState(){
		setCopied(true)
		setTimeout(()=>setCopied(false),1500)
	}
	return (
		<CopyToClipboard text={props.background} onCopy={changeCopyState}>
			<div style={{ backgroundColor: props.background }} className={classes.colorBox}>
				<div style = {{ backgroundColor: props.background }} className={`${classes.copyOverlay} ${copied && classes.showOverlay} `}></div>
				<div  className={`${classes.copyMessage} ${copied && classes.showCopyMessage} `}>
					<h1>copied!</h1>
					<p className = {classes.copyText}>{props.background}</p>
				</div>
				<div >
					<div className={classes.boxContent}>
						<span className ={classes.colorName}>{props.name}</span>
					</div>
					<button className={classes.copyButton}>Copy</button>
				</div>
			{ props.showingFullPalette &&(<Link to ={`/palette/${props.palletId}/${props.id}`} onClick ={e=>e.stopPropagation()}>
			<span className={classes.seeMore}>MORE</span>
			</Link>)}
				
			</div>
		</CopyToClipboard>
	);
}

export default ColorBox;
