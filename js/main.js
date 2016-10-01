var bgImg = [
  "img/bg/hanamura.jpg",
  "img/bg/hanamura2.jpg",
  "img/bg/industries.jpg",
  "img/bg/industries2.jpg",
  "img/bg/kings-row.jpg",
  "img/bg/kings-row2.jpg",
  "img/bg/numbani.jpg"
]
var charImg = [
  {
    name: 'hanzo',
    traits: 'honor, brute-force, clean',
    img: 'img/hanzo.png'
  },
  {
    name: 'soldier76',
    traits: 'honor, brute-force, dirty',
    img: 'img/soldier76.png'
  },
  {
    name: 'genji',
    traits: 'honor, cunning, clean',
    img: 'img/genji.png'
  },
  {
    name: 'pharah',
    traits: 'honor, cunning, dirty',
    img: 'img/pharah.png'
  },
  {
    name: 'mercy',
    traits: 'honor, peace, clean',
    img: 'img/mercy.png'
  },
  {
    name: 'mei',
    traits: 'honor, peace, dirty',
    img: 'img/mei.png'
  },
  {
    name: 'reinhardt',
    traits: 'strength, brute-force, clean',
    img: 'img/reinhardt.png'
  },
  {
    name: 'winston',
    traits: 'strength, brute-force, dirty',
    img: 'img/winston.png'
  },
  {
    name: 'widowmaker',
    traits: 'strength, cunning, clean',
    img: 'img/widowmaker.png'
  },
  {
    name: 'reaper',
    traits: 'strength, cunning, dirty',
    img: 'img/reaper.png'
  },
  {
    name: 'tracer',
    traits: 'strength, peace, clean',
    img: 'img/tracer.png'
  },
  {
    name: 'zarya',
    traits: 'strength, peace, dirty',
    img: 'img/zarya.png'
  },
  {
    name: 'dva',
    traits: 'money, brute-force, clean',
    img: 'img/dva.png'
  },
  {
    name: 'roadhog',
    traits: 'money, brute-force, dirty',
    img: 'img/roadhog.png'
  },
  {
    name: 'ana',
    traits: 'money, cunning, clean',
    img: 'img/ana.png'
  },
  {
    name: 'junkrat',
    traits: 'money, cunning, dirty',
    img: 'img/junkrat.png'
  },
  {
    name: 'lucio',
    traits: 'money, peace, clean',
    img: 'img/lucio.png'
  },
  {
    name: 'mcree',
    traits: 'money, peace, dirty',
    img: 'img/mcree.png'
  }  
]
var image = document.getElementById('char-img')
var youAre = document.getElementById('you-are')
var charName = document.getElementById('char-name')
var dropdown1 = document.getElementById('dropdown1')
var dropdown2 = document.getElementById('dropdown2')
var dropdown3 = document.getElementById('dropdown3')
var btn = document.getElementById('btn')


function getOptions(){
  var userChoice = dropdown1.value + ", " + dropdown2.value + ", " + dropdown3.value

  for (var i = 0; i < charImg.length; i++) {
    if(userChoice === charImg[i].traits){
      youAre.className = 'active'
      image.className = 'active'
      charName.textContent = charImg[i].name
      image.setAttribute('src', charImg[i].img)
    }
  }
}

btn.addEventListener('click', getOptions)
