// Define function
function goodMusician() {
    
    // set the stage 
        alert ( "I'd like to ask you a question." );
    

    // ask the hard questions
    const q1 = prompt( "Who's the best musician in the land?" );
    
    // check for the truth
    if ( q1.toUpperCase() === 'CHRIS' ) {
        
        // award awareness
        alert( 'You are very smart.' );
      } 

      //give hints for those who need
        else {
          alert ( "The first letter is 'C'" ); goodMusician();
      }
}

//call the function
goodMusician();