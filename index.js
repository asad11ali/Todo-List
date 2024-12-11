/* eslint-disable no-unused-vars */

const menu = document.querySelector('nav');
function showMenu() {
  menu.style.left = '0';
}
function hideMenu() {
  menu.style.left = '-50%';
}

showMenu();
hideMenu();

const feature = document.querySelector('.team');

const featureData = [
  {
    image: 'images/speaker_01.png',
    title: 'Yochai Benkler',
    info: 'Barkman professor of enterprenurial legal studies at Harward law school.',
    discription: ' Barkman professor of enterprenurial legal studiesat Harward law school.Barkman professor of enterprenurial legal studiesat Harward law school.',
  },
  {
    image: 'images/speaker_03.png',
    title: 'Soheong Noh',
    info: 'Barkman professor of enterprenurial legal studies at Harward law school.',
    discription: ' Barkman professor of enterprenurial legal studiesat Harward law school.Barkman professor of enterprenurial legal studiesat Harward law school.',
  },
  {
    image: 'images/speaker_05.png',
    title: 'Lila Tretikov',
    info: 'Barkman professor of enterprenurial legal studies at Harward law school.',
    discription: ' Barkman professor of enterprenurial legal studiesat Harward law school.Barkman professor of enterprenurial legal studiesat Harward law school.',
  },
  {
    image: 'images/speaker_02.png',
    title: 'Kilnam Chon',
    info: 'Barkman professor of enterprenurial legal studies at Harward law school.',
    discription: ' Barkman professor of enterprenurial legal studiesat Harward law school.Barkman professor of enterprenurial legal studiesat Harward law school.',
  },
  {
    image: 'images/speaker_04.png',
    title: 'Juia Leda',
    info: 'Barkman professor of enterprenurial legal studies at Harward law school.',
    discription: ' Barkman professor of enterprenurial legal studiesat Harward law school.Barkman professor of enterprenurial legal studiesat Harward law school.',
  },
  {
    image: 'images/speaker_06.png',
    title: 'Ryan Markley',
    info: 'Barkman professor of enterprenurial legal studies at Harward law school.',
    discription: ' Barkman professor of enterprenurial legal studiesat Harward law school.Barkman professor of enterprenurial legal studiesat Harward law school.',
  },
];

feature.innerHTML = `
    <div class="team-one">

      <div>
        <img src=${featureData[0].image} alt="">
        <div class="content">
          <h4>${featureData[0].title} </h4>
          <p class="info">
            <i>${featureData[0].info} </i>
          </p>
          <p class="discription">
           ${featureData[0].discription} 
          </p>
        </div>
      </div>

      <div>
        <img src=${featureData[1].image} alt="">
        <div class="content">
          <h4>${featureData[1].title}</h4>
          <p class="info">
            <i>${featureData[1].info} </i>
          </p>
          <p class="discription">
           ${featureData[1].discription} 
          </p>
        </div>
      </div>
   
      <div>
        <img src=${featureData[2].image} alt="">
        <div class="content">
          <h4>${featureData[2].title}</h4>
          <p class="info">
            <i>${featureData[2].info} </i>
          </p>
          <p class="discription">
           ${featureData[2].discription} 
          </p>
        </div>
      </div>

    </div>

   <button onclick="showFeature()">MORE<i class="fa-duotone fa-solid fa-chevron-down"></i></button>
    
    <div class="team-two">

      <div>
        <img src=${featureData[3].image} alt="">
        <div class="content">
          <h4>${featureData[3].title}</h4>
          <p class="info">
            <i>${featureData[3].info} </i>
          </p>
          <p class="discription">
           ${featureData[3].discription} 
          </p>
        </div>
      </div>

      <div>
        <img src=${featureData[4].image} alt="">
        <div class="content">
          <h4>${featureData[4].title}</h4>
          <p class="info">
            <i>${featureData[4].info} </i>
          </p>
          <p class="discription">
           ${featureData[4].discription} 
          </p>
        </div>
      </div>

      <div>
        <img src=${featureData[5].image} alt="">
        <div class="content">
          <h4>${featureData[5].title}</h4>
          <p class="info">
            <i>${featureData[5].info} </i>
          </p>
         <p class="discription">
           ${featureData[5].discription} 
          </p>
        </div>
      </div>

    </div>
`;

const hide = document.querySelector('.team-two');

const team = document.querySelector('.team');

const btn = document.querySelector('button');

function showFeature() {
  hide.style.display = 'flex';
  team.style.height = '1400px';
  btn.style.display = 'none';
}
