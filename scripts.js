var photos =["images/image1.jpg","images/image2.jpg","images/image3.jpg","images/image4.jpg","images/image5.jpg"];
var imgtag =document.querySelector("img");
var count =0;
function next(){
    count++;
    if(count>=photos.length){
        count=0;
        imgtag.src=photos[count];
    }
    else{
        imgtag.src=photos[count];
    }
}
function prev(){
    count--;
    if(count<0){
        count=photos.length-1;
        imgtag.src=photos[count];
    }
    else{
        imgtag.src=photos[count];
    }
}