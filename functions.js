function hide(a) {
  var divchild = a.parentNode.getElementsByTagName("div");
  if (divchild[0].style.visibility != "hidden") {
    divchild[0].style.visibility = "hidden";
    divchild[0].style.height = "0";
    divchild[0].style.marginTop = "";
  } else {
    divchild[0].style.visibility = "";
    divchild[0].style.height = "";
    divchild[0].style.marginTop = "10px";
  }
}

function slide(classname, item) {
  var divcontent = document.getElementsByClassName("content");
  for (var i = 0; i < divcontent.length; i++) {
    divcontent[i].style.visibility = "hidden";
  }
  var div = document.getElementsByClassName(classname);
  div[0].style.visibility = "";
  var tabitem = document.getElementsByClassName('tab-item')
  for (var i = 0; i < tabitem.length; i++) {
    tabitem[i].classList.remove('active');
  }
  item.classList.add('active')
}
