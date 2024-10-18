 export const CustomImage=(props)=>{
    const {source,height,width,style}=props
    console.log("image is rendering")
    return(
        <div>
            <img src={source} height={height} width={width} style={style}/>
        </div>
    )
}