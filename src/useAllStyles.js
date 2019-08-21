import { makeStyles } from '@material-ui/styles';

const useMiniPaletteStyles = makeStyles({
 root:{
backgroundColor:'white',
border:"1px solid black",
borderRadius:"5px",
padding:'.5rem',
position:"relative",
overflow:"hidden",
"& hover":{
cursor:"pointer"
}
 },
 colors:{
backgroundColor:'#dae1e4',
height:"150px",
width:"100%",
borderRadius:"5px",
overflow:"hidden"
 },
 title:{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
margin:"0",
color:"black",
paddingTop:".5rem",
fontSize:"1rem",
position:"relative",
 },
 emoji:{
marginLeft:".5rem",
fontSize:'1.5rem',
 },
 minicolor:{
     height:"25%",
     width:"20%",
     display:"inline-block",
     margin:"0 auto",
     position:"relative",
     marginBottom:"-3.5px",
 }
})


const usePalleteListStyles =makeStyles({
root:{
    backgroundColor:"blue",
    height:"100vh",
    display:"flex",
    alignItems:"flex-start",
    justifyContent:"center"

},
container:{
width:"50%",
display:"flex",
alignItems:"flex-start",
flexDirection:"column",
flexWrap:"wrap",


},
nav:{
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color:"white"
},
palettes:{
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
}
})
export {useMiniPaletteStyles,usePalleteListStyles}