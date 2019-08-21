import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import './ColorBox.css';
import CopyToClipboard from 'react-copy-to-clipboard';
function ColorBox(props) {

	const[copied,setCopied] = useState(false)


	function changeCopyState(){
		setCopied(true)
		setTimeout(()=>setCopied(false),1500)
	}
	return (
		<CopyToClipboard text={props.background} onCopy={changeCopyState}>
			<div style={{ backgroundColor: props.background }} className="ColorBox">
				<div style = {{ backgroundColor: props.background }} className={`copy-overlay ${copied && "show"} `}></div>
				<div  className={`copy-message ${copied && "show"} `}>
					<h1>copied!</h1>
					<p>{props.background}</p>
				</div>
				<div className="copy-container">
					<div className="box-content">
						<span>{props.name}</span>
					</div>
					<button className="copy-button">Copy</button>
				</div>
			{ props.showLink &&(<Link to ={`/palette/${props.palletId}/${props.id}`} onClick ={e=>e.stopPropagation()}>
			<span className="see-more">More</span>
			</Link>)}
				
			</div>
		</CopyToClipboard>
	);
}

export default ColorBox;
