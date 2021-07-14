var fName = prompt("what is your first name")

alert("hey, wlecome to my website " + fName )

var favSport = prompt("What is the sport you like to do?")

if(favSport == "Soccer"){
document.write(
  "<div>" + "<h3>" + favSport+"</h3>"
+ "<img  src='https://games4esl.com/wp-content/uploads/1-6.png?ezimgfmt=rs:300x300/rscb84/ng:webp/ngcb84' width='300' height='200' />"+ "</div>")
}

else if (favSport =="Basketball"){
document.write(
  "<div>" + "<h3>" + favSport +"</h3>"
+ "<img  src='https://games4esl.com/wp-content/uploads/4-1.png?ezimgfmt=rs:300x300/rscb84/ng:webp/ngcb84' width='300' height='200'     />" + "</div>")
}

else if(favSport =="Tennis"){
document.write(
  "<div>" + "<h3>" + favSport+"</h3>"
+ "<img  src='https://games4esl.com/wp-content/uploads/3-2.png?ezimgfmt=rs:300x300/rscb84/ng:webp/ngcb84' width='300' height='200'    /> "+ "</div>")
}

else{
  alert('This sport not available')
}