var regions = {
  irkutsk: {
    name: "г. Иркутск",
    bubble: {
      hostel: {
        href: '#',
        linkText: 'Иркутский хостел',
        text: 'Информация про хостел блаблабла'
      },
      apart: {
        href: '#',
        linkText: 'Иркутский апарт-отель',
        text: 'Информация про апарт-отель блаблабла-бла-бла!'
      }
    }
  },
  krasnoyarsk: {
    name: "г. Красноярск",
    bubble: {
      hostel: {
        href: '#',
        linkText: 'Красноярский хостел',
        text: 'Информация про хостел блаблабла'
      },
      apart: {
        href: '#',
        linkText: 'Красноярский апарт-отель',
        text: 'Информация про апарт-отель блаблабла-бла-бла!'
      }
    }
  }
}

var bubble = document.getElementById('bubble');
var curReg = null;
var curPath = null;


var path = document.querySelector('svg');

var deactivateRegion = function () {
  bubble.setAttribute('hidden', 'hidden');
  bubble.style.top = 0;
  bubble.style.left = 0;
  if (curPath) {
    curPath.classList.remove('active-region');
  }
}

path.onclick = function (e) {
  curPath = e.target;
  regId = curPath.id;
  console.log(regId);
  console.log(regions[regId]);
  if (regions[regId]) {
    curReg = regions[regId];
    curPath.classList.add('active-region');
    // bubble.querySelector('.bubble').innerHTML = curReg.bubble;
    bubble.removeAttribute('hidden');

    bubble.style.top = e.pageY + 'px';
    bubble.style.left = e.pageX + 'px';
  } else {
    deactivateRegion();
  }
}

var closeBubble = bubble.querySelector('.close-bubble');
closeBubble.addEventListener('click', deactivateRegion) ;
