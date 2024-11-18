



function kalemat(){
   var z =  [{
      quotes : ' 1- “Be yourself; everyone else is already taken.”' ,
      author:"― Oscar Wilde"
   
      }
      ,
      {
         quotes: ' 2- “So many books, so little time.”',
         author:'― Frank Zappa'
      }
      ,
      {
         quotes: '3- “If you tell the truth, you dont have to remember anything.',
         author:'― Mark Twain'
   
      }
      ,
      {
         quotes: '4- “A friend is someone who knows all about you and still loves you.”',
         author:'― Elbert Hubbard'
   
   
      }
      ,
      {
         quotes: '5- “To live is the rarest thing in the world. Most people exist, that is all.”',
         author:'― Oscar Wilde'
   
      }
      ,
      {
         quotes: '6- “Always forgive your enemies; nothing annoys them so much.”',
         author:'― Oscar Wilde'
   
      }
      
      
        ]

for(var  i = Math.random() * 0; i <=  Math.random() * z.length ; i++){
   document.getElementById('quotes').innerHTML = z[i].quotes ;
   document.getElementById('authors').innerHTML =z[i].author;
 
}

}
