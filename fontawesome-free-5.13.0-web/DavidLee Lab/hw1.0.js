var h1 = document.createElement('h1');
h1.innerHTML='David';
var body = document.getElementsByTagName('body')[0];
body.appendChild(h1);

 

var li=document.createElement('li');
var p01=document.createElement('p');
var p02=document.createElement('p');
var p03=document.createElement('p');
p01.innerHTML='window';
p02.innerHTML='document';
p03.innerHTML='html';
li.appendChild(p01);
li.appendChild(p02);
li.appendChild(p03);
body.appendChild(li);

 


var ul=document.createElement('ul');
var li01=document.createElement('li');
var li02=document.createElement('li');
var li03=document.createElement('li');
li01.innerHTML='Node';
li02.innerHTML='NodeList';
li03.innerHTML='HTMLCollection';
ul.appendChild(li01);
ul.appendChild(li02);
ul.appendChild(li03);
body.appendChild(ul);