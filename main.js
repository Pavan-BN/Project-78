var images = [
"https://cdn4.vectorstock.com/i/1000x1000/01/73/young-father-avatar-character-vector-14530173.jpg",
"https://cdn1.vectorstock.com/i/1000x1000/48/80/character-of-mother-standing-design-vector-13874880.jpg",
"https://previews.123rf.com/images/npr1977/npr19771409/npr1977140900008/31425942-geek-boy-cartoon-character.jpg",
"https://kbimages1-a.akamaihd.net/73c58c2c-c205-49ac-a745-86d25c8081ee/1200/1200/False/the-family-book.jpg"
];

var names = ["Ranbir Singh","Alia Singh","Rocky Singh","The Family Book"];
var i = 0;
function update(){
 

document.getElementById("image").src = images[i];
document.getElementById("names").innerHTML = names[i];
if (i == images.length) {
    i=0;
}
i++;
}