// 切换城市
const chooseCity=document.querySelector('.chooseCity')
const city = document.querySelector('.city')
city.addEventListener('click', function () {
  chooseCity.style.display = 'block'
})
// window.οnlοad=function(){
// 当页面卷曲一定程度显示搜索框
const fixed = document.querySelector('.fixed')
const main = document.querySelector('main')
document.addEventListener('scroll', () => {
  if (window.pageYOffset >= main.offsetTop) {
    fixed.style.display = 'block'
  } else {
    fixed.style.display = 'none'
  }
})
// banner区域定时器设置扫码
const saoma = document.querySelector('#saoma')
const reset = document.querySelector('#reset');
var time = function () {
  saoma.style.display = 'block';
}
window.addEventListener('load', () => {
  setTimeout(time, 3000)
})
reset.addEventListener('click', () => {
  saoma.style.display = 'none';
  setTimeout(time, 3000)
})
// banner隔行变色登录
var a = document.querySelector('.fr_01').querySelectorAll('a');
for (var i = 0; i < a.length; i++) {
  a[i].onmouseover = function () {
    this.className = 'changeBlue';
  }
  a[i].onmouseout = function () {
    this.className = '';
  }
}
// nav区域左侧精灵图
const spans = document.querySelector('.spirit').querySelectorAll('span')
for (let i = 0; i < spans.length; i++) {
  let index = i * 30;
  spans[i].style.backgroundPosition = '0 -' + index + 'px';
}
// sidebar固定定位，页面卷曲显示top
const header = document.querySelector('header')
const div = document.querySelector('.sidebar').querySelectorAll('div')
document.addEventListener('scroll', () => {
  if (window.pageYOffset >= header.offsetHeight) {
    div[div.length - 1].style.display = 'block'
  } else {
    div[div.length - 1].style.display = 'none'
  }
})
for (let i = 0; i < div.length; i++) {
  div[i].onmouseover = function () {
    this.children[0].style.display = 'none';
    this.children[1].style.display = 'block'
  }
  div[i].onmouseout = function () {
    this.children[0].style.display = 'block';
    this.children[1].style.display = 'none'
  }
}
const goback = document.querySelector('.goback')
goback.addEventListener('click', () => {
  goback.timer = setInterval(() => {
    if (window.pageYOffset == 0) {
      // 停止动画 本质是停止定时器
      clearInterval(goback.timer);
      // 回调函数写到定时器结束里面
      // if (callback) {
      //   // 调用函数
      //   callback();
      // }
    }
    let step = (0 - window.pageYOffset) / 10;
    window.scroll(0, window.pageYOffset + step);
  }, 15)
})
// 鼠标经过显示详细职位
const li = document.querySelector('.aside').querySelectorAll('li')
for (let i = 1; i < li.length; i++) {
  li[i].onmouseover = function () {
    this.children[this.children.length - 1].style.display = 'block'
  }
  li[i].onmouseout = function () {
    this.children[this.children.length - 1].style.display = 'none'
  }

}
// tab栏切换 用箭头函数写，注意作用域问题
const lis = document.querySelector('.nav').querySelectorAll('li')
const items = document.querySelectorAll('.items')
for (let i = 0; i < lis.length; i++) {
  lis[i].setAttribute('index', i)
  lis[i].onclick = function () {
    for (let i = 0; i < lis.length; i++) {
      lis[i].className = '';
    }
    this.className = 'hot1'
    let index = this.getAttribute('index')
    for (let i = 0; i < items.length; i++) {
      items[i].style.display = 'none'
    }
    items[index].style.display = 'block'
  }
}
// 轮播图
window.addEventListener('load', function () {
  const lun = document.querySelector('.lun')
  const lunImg = this.document.querySelector('.lunImg')
  let lili = document.querySelector('.lunBottom').querySelectorAll('li');
  var num = 0
  var flag = true;
  // 自动轮播
  var o = function () {
    if (flag) {
      flag = false;
      num++
      for (let i = 0; i < lili.length; i++) {
        lili[i].style.backgroundColor = ''
      }
      lili[num].style.backgroundColor = 'black';
      lunImg.style.left = -800 * num + 'px';
      lunImg.style.transition = 'all .5s';
      if (num == lunImg.children.length - 1) {
        // lunImg.style.left = 0 + 'px'
        num = -1;
      }
      flag = true;
    }
  }
  var oo = setInterval(o, 3000);
  // 点击
  for (let i = 0; i < lili.length; i++) {
    lili[i].setAttribute('index', i);
    lili[i].addEventListener('click', function () {
      if (flag) {
        flag = false;
        clearInterval(oo);
        oo = null;
        for (let i = 0; i < lili.length; i++) {
          lili[i].style.backgroundColor = ''
        }
        this.style.backgroundColor = "black"
        let index = this.getAttribute('index');
        lunImg.style.left = -800 * index + 'px';
        num = index;
        flag = true;
      }
    })
  }
  // // 鼠标经过清除定时器
  // lun.addEventListener('mouseenter', function () {
  //   clearInterval(oo);
  //   o = null;
  // })
  // // 鼠标离开恢复定时器
  // lun.addEventListener('mouseleave', function () {
  //   oo=setInterval(o, 2000)
  // })
})