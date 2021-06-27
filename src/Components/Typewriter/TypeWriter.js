import React, {useState, useEffect} from "react";

function Typewriter() {

    const [text, setText] = useState('')
    // typewriter function for headers
var aText = [
    `Hi. I'm Chris. `, 
    ` With me, it's never a roll of the dice. `,
    " Have a look. :) ",
    " "

];
    var iSpeed = 50;
    var iIndex = 0; 
    var iArrLength = aText[0].length; 
    var iScrollAt = 20; 
     
    var iTextPos = 0;
    var sContents = ''; 
    var iRow; 
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '\n';
     }
     setText(sContents + aText[iIndex].substring(0, iTextPos) + "_");
     if ( iTextPos++ === iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex !== aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout(typewriter, 500);
      }
     } else {
      setTimeout(typewriter, iSpeed);
     }
    }

    useEffect(() => {
        typewriter()
    }, [])

    return (
        <h1 className="typewriter">{text}</h1>
    )
}

export default Typewriter;