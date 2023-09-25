import { useState } from "react"


export default function WorkSpace (){
    const [workSpaces, setWorkSpaces] = useState(['aa','bb','cc','dd','ee','ff','gg','hh'])

    return (
        <Grid container>
            {
                workSpaces.map((workSpace)=>{
                    return <Grid item>{workSpace}</Grid>
                })
            }
        </Grid>
    )
}