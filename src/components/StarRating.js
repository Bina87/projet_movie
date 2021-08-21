import React from 'react'

const StarRating = ({rating,handrating}) => {
    function star(x)
    {
        var star=[];
        for(let i=1;i<=5;i++)
            {
               if(i<=x)
               {
                   star.push(<span onClick={()=>handrating(i)} style={{color:'gold'}}>★</span>)
               }
               else{
                   star.push(<span onClick={()=>handrating(i)} style={{color:'black',fontSize:'20px'}}>☆</span>)
               }
            }

            return star;
    }
    return (
        <div>
               {star(rating)}
        </div>
    )
}
StarRating.defaultProps = {
    handrating : () => {}
}

export default StarRating
