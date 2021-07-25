var fName = prompt("what is your first name")

alert("hey, wlecome to my website " + fName )

var favSport = prompt("What is your favorite Sport? Please choose one of these 1- Soccer ,2- Basketball ,3- Tennis")

while( favSport != "Soccer" && favSport != "Basketball" && favSport != "Tennis" )
{
  favSport = prompt("What is your favorite Sport? Please choose one of these 1- Soccer ,2- Basketball ,3- Tennis")
}

var NumberOfPicture = prompt("How many times do you want to see pictures for your favorite sport")

while(NumberOfPicture > 10)
{
  NumberOfPicture = prompt("the number must be less than ten (10)") 
}

//var favSport = prompt("What is the sport you like to do?")


if(favSport == "Soccer"){
  for( var i = 1 ; i <= NumberOfPicture ; i++)
{
document.write(
  "<div>" + "<h3>" + favSport+"</h3>"
+ "<img  src='https://games4esl.com/wp-content/uploads/1-6.png?ezimgfmt=rs:300x300/rscb84/ng:webp/ngcb84' width='300' height='200' />"+ "</div>")
}
}

else if (favSport =="Basketball"){
  for( var i = 1 ; i <= NumberOfPicture ; i++)
{
document.write(
  "<div>" + "<h3>" + favSport +"</h3>"
+ "<img  src='https://games4esl.com/wp-content/uploads/4-1.png?ezimgfmt=rs:300x300/rscb84/ng:webp/ngcb84' width='300' height='200'     />" + "</div>")
}
}

else if(favSport =="Tennis"){
  for( var i = 1 ; i <= NumberOfPicture ; i++)
{
document.write(
  "<div>" + "<h3>" + favSport+"</h3>"
+ "<img  src='https://games4esl.com/wp-content/uploads/3-2.png?ezimgfmt=rs:300x300/rscb84/ng:webp/ngcb84' width='300' height='200'    /> "+ "</div>")
}
}

//else{
 // alert('This sport not available')
//}