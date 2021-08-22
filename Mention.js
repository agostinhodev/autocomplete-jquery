$( document ).ready(function() {
   
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


});