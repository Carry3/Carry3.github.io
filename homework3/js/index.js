function Function1() {
  alert("p1");
  document.getElementById("p1").style.color = "red";
}
function Function2() {
  alert("p2");
  var d = new Date();
  var text = d.getFullYear().toString() + '-' + (d.getMonth() + 1).toString() + '-' + d.getDate().toString();
  document.getElementsByTagName("H1")[0].innerHTML = text;
}
function Function3() {
  alert("p3");
  var fu = document.getElementsByTagName("Ul")[0];
  var son = fu.children;
  for(var i = 0 ; i < son.length ; i++) {
    if(son[i].tagName == "LI") son[i].classList.add("fn-active");
  }
}
function Function4() {
  alert("p4");
  var shan = document.getElementsByTagName("Li")[7];
  shan.remove();
}
function Function5() {
  alert("p5");
  window.open("https://www.taobao.com/");
}
function Function6() {
  alert("p6");
  var lili = document.createElement("li");
  var text = document.createTextNode("p9");
  lili.appendChild(text);
  var element = document.getElementsByTagName("Ul")[0];
  element.appendChild(lili);
}
function Function7() {
  alert("p7");
  var w = window.innerWidth;
  var els = document.getElementsByClassName("m-box")[0];
  els.style.width = w;
}