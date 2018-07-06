import React from 'react'
function ViewList(recdata){
    return( <div> <a href={recdata.url}>名字：{recdata.name}(stars：{recdata.connect})</a><br/>
    说明：{recdata.desc}   
    </div>
        
    )
}
export default ViewList;