if(location.search.length == 0){
  var url = 'https://t.me/slivmens_sklad';
}else{
  var url = 'http://slivmens-courses.ru/'+location.search;
  var element = document.getElementById("redirect")
  element.innerHTML =  url;
  element.setAttribute("href", url)
}
window.location.href('https://slivmens-courses.ru/?url=dGcx');
var sec=30;
 function Sec(url)
 {
  document.getElementById("sec").innerHTML=sec;
   sec--;
   if(sec==1)
   {
   	  window.location.href(url)
   }
   setTimeout('Sec()',1000);
 }
 
 //Sec(url);
console.log(url)
