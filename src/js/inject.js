// 利用content_scripts注入到页面到js，页面js可以调用该页面的js
window.ddd = function() {
  alert('inject')
}