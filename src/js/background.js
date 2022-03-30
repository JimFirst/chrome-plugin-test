// 始终运行在后台的js
init()
function init() {
  setBadge()
  setContextMenus()
}
// init方法
function setBadge(text = "dmj", color = [255, 0, 0, 255]) {
  chrome.browserAction.setBadgeText({
    text
  })
  chrome.browserAction.setBadgeBackgroundColor({
    color
  })

}
function setContextMenus() {
  let index = 1
  chrome.contextMenus.create({
    title: "测试右键菜单",
    onclick: function () {
      index++
      alert(index)
    },
  })
  chrome.contextMenus.create({
    title: '使用度娘搜索：%s', // %s表示选中的文字
    contexts: ['selection'], // 只有当选中文字时才会出现此右键菜单
    onclick: function (params) {
      // 注意不能使用location.href，因为location是属于background的window对象
      chrome.tabs.create({ url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText) });
    },
  });
}


// 通信测试
function testMessage() {
  alert('我是background')
}