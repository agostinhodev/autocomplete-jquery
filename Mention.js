$( document ).ready(function() {

    $("#input").keyup(function (event){

        if(event.keyCode === 50){

            $('#input').autocomplete({

                serviceUrl: './users.json',
                type: 'GET',
                width: 'auto',
                autoSelectFirst: true,
                delimiter: "@",
                params: {
        
                },
                minChars: 1,
                noCache: true,
                appendTo: $('#result'),  
               
                onSelect: function (suggestion) {
                    
                   console.log(suggestion);
        
                }        
              
            });

        } else if(event.keyCode === 32 || event.keyCode === 8){

            $('#input').autocomplete( "disable" );
            $('#result').html('');

        }

    })    


});