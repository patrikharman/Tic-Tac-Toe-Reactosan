import Elem from "./Elem.js"

export default function JatekTer(props){
    return(
        <>
        {
            props.lista.map((elem,index)=>{
                return <Elem mezo={elem} key={index}/>
            })
        }
        </>
    )
}
