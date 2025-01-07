var names = ['John', 'James', 'Jonas', 'Juan', 'Hugo', 'Rodrigo', 'Bruno', 'Alexis', 'Smith','Michael'];

function getJ(){
   
        
    for ( var i = 0; i < names.length ; i++){
       //console.log(names[i]); //busca los nombres en el array
       
       for( var l = 0; l < names[i].length; l++){
         //console.log(names[i][l]); //busca las letras de cada nombre del array 
            if( names[i][l] === 'J'){
                 console.log( 'Hello', names[i]);
            }
                //console.log ('Good Bye', names[i]);
       }
       console.log('good bye',names[i]);
    }

}
getJ();
