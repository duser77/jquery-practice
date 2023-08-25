// $('p').click(function(){}) //execute function when click on p
    // $(document).ready(function(){}) //execute only if documement is loaded
    // $ itself contain (document).ready in it

// $(function(){
//         // $('p').click(); //click on p
        
//     $('p').click(
//         function () {
//             // $('p').hide(); // will hide all p element
//             // $(this).hide(); //will hide clicked p
//             $('p').hide(1000,function(){console.log("hiden")})
//             $('p').show(1000,function(){console.log("shown")})
//             }); 
//     })   
$('.btn1').click(function(){
    $('p').toggle(1000)
})
// $('p').fadeIn(1000)
// $('p').fadeOut(1000)
// $('p').toggle(1000)

// $('.but').click(function(){
//     $('.lor').fadeOut(1000);
//     $('.lor').fadeIn(1000);
//     // $('.lor').fadeOut(1000);
// })
$('.lor').animate({opacity:0.3},1000)
$('.lor').animate({opacity:0.9},1000)
$('.lor').animate({width:'130px'},1000)
 

//ajax get and post method  using jquery
// $get("https://code.jquery.com/jquery-3.7.0.js", function(data, status){alert(data)})
// $post("https://code.jquery.com/jquery-3.7.0.js",{name:"xyz"}, function(data, status){alert(sucees)}) 
