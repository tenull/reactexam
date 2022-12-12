import { useState } from "react";

const Character = (character) => {
    const [showMore,setShowMore] = useState(false)
    return (    
  
        <div className="container">
<p>{character.character.name}</p>
<button onClick={()=>{setShowMore(!showMore)}}>
                {showMore ? 'Show Less': 'Show More'}
                </button>
{showMore &&
    <p>{character.character.details}</p>}

        </div>
      );
}
 
export default Character;