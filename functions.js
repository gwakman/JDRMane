function hide(a){
  pchild=a.parentNode.getElementsByTagName('div');
  if(pchild[0].style.visibility!='hidden'){
    pchild[0].style.visibility='hidden';
    pchild[0].style.height='0';
    pchild[0].style.marginTop='';
  } else {
    pchild[0].style.visibility='';
    pchild[0].style.height='';
    pchild[0].style.marginTop='10px';
  }
}