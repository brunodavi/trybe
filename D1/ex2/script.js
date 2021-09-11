function getId(str) {
  return document.getElementById(str);
}

function getNames(str) {
  return document.getElementsByTagName(str);
}

function getClass(str) {
  return document.getElementsByClassName(str);
}

function getSelect(str) {
  return document.querySelector(str);
}

function getSelectAll(str) {
  return document.querySelectorAll(str);
}

getNames('body')[0].style = ' rgb(26, 26, 26)';