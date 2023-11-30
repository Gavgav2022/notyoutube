const videos = [{
    title: 'All quiet on the western front',
    duration: 153,
    thumbnail: 'images/thumbnails/all_quiet_on_the_western_front.webp',
    avatar: 'images/avatars/netflix.jpg',
    studio: 'netflix',
    linkId: 'hf8EYbVxtCY',
    likes: 214339,
    views: 10559615,
    year: 2023,
    channelId: '@Netflix'
  },
  {
    title: 'Army of the dead',
    duration: 183,
    thumbnail: 'images/thumbnails/army_of_the_dead.webp',
    avatar: 'images/avatars/netflix.jpg',
    studio: 'netflix',
    linkId: 'tI1JGPhYBS8',
    likes: 228362,
    views: 16987562,
    year: 2021,
    channelId: '@Netflix'
  },
  {
    title: 'Black panter',
    duration: 138,
    thumbnail: 'images/thumbnails/black_panter.webp',
    avatar: 'images/avatars/marvel.jpg',
    studio: 'marvel',
    linkId: 'xjDjIWPwcPU',
    likes: 560257,
    views: 53852479,
    year: 2018,
    channelId: '@marvel'
  },
  {
    title: 'Blonde',
    duration: 129,
    thumbnail: 'images/thumbnails/blonde.webp',
    avatar: 'images/avatars/netflix.jpg',
    studio: 'netflix',
    linkId: 'aIsFywuZPoQ',
    likes: 250368,
    views: 10843657,
    year: 2022,
    channelId: '@Netflix'
  },
  {
    title: 'Creed III',
    duration: 143,
    thumbnail: 'images/thumbnails/creed.webp',
    avatar: 'images/avatars/mgm.jpg',
    studio: 'metro goldwyn mayer',
    linkId: 'AHmCH7iB_IM',
    likes: 196247,
    views: 17865794,
    year: 2023,
    channelId: '@MGMStudios'
  },
  {
    title: 'Deadpool',
    duration: 153,
    thumbnail: 'images/thumbnails/deadpool.webp',
    avatar: 'images/avatars/20_fox.jpg',
    studio: '20th century studio',
    linkId: 'Xithigfg7dA',
    likes: 63254,
    views: 13342569,
    year: 2016,
    channelId: '@20thCenturyStudios'
  },
  {
    title: 'Doctor strange',
    duration: 122,
    thumbnail: 'images/thumbnails/doctor_strange.webp',
    avatar: 'images/avatars/marvel.jpg',
    studio: 'marvel',
    linkId: 'Lt-U_t2pUHI',
    likes: 251478,
    views: 25556677,
    year: 2016,
    channelId: '@marvel'
  },
  {
    title: 'Dont look up',
    duration: 165,
    thumbnail: 'images/thumbnails/dont_look_up.webp',
    avatar: 'images/avatars/netflix.jpg',
    studio: 'netflix',
    linkId: 'RbIxYm3mKzI',
    likes: 272587,
    views: 16987598,
    year: 2022,
    channelId: '@Netflix'
  },
  {
    title: 'Dune',
    duration: 184,
    thumbnail: 'images/thumbnails/dune.webp',
    avatar: 'images/avatars/wb.jpg',
    studio: 'warner brothers',
    linkId: 'n9xhJrPXop4',
    likes: 666666,
    views: 41567871,
    year: 2021,
    channelId: '@WarnerBrosPictures'
  },
  {
    title: 'ELVIS',
    duration: 195,
    thumbnail: 'images/thumbnails/elvis.webp',
    avatar: 'images/avatars/wb.jpg',
    studio: 'warner brothers',
    linkId: 'wBDLRvjHVOY',
    likes: 146874,
    views: 23445687,
    year: 2022,
    channelId: '@WarnerBrosPictures'
  },
  {
    title: 'Fantastic Beats',
    duration: 195,
    thumbnail: 'images/thumbnails/fantastic_beats.webp',
    avatar: 'images/avatars/wb.jpg',
    studio: 'warner brothers',
    linkId: 'ViuDsy7yb8M',
    likes: 181265,
    views: 19242658,
    year: 2016,
    channelId: '@WarnerBrosPictures'
  },
  {
    title: 'Free Guy',
    duration: 182,
    thumbnail: 'images/thumbnails/free_guy.webp',
    avatar: 'images/avatars/20_fox.jpg',
    studio: '20th century studio',
    linkId: 'X2m-08cOAbc',
    likes: 415236,
    views: 24570879,
    year: 2020,
    channelId: '@20thCenturyStudios'
  },
  {
    title: 'Glass onion',
    duration: 163,
    thumbnail: 'images/thumbnails/glass_onion.webp',
    avatar: 'images/avatars/netflix.jpg',
    studio: 'netflix',
    linkId: 'gj5ibYSz8C0',
    likes: 94231,
    views: 14346872,
    year: 2022,
    channelId: '@netflix'
  },
  {
    title: 'Hypnotic',
    duration: 149,
    thumbnail: 'images/thumbnails/hypnotic.webp',
    avatar: 'images/avatars/wb.jpg',
    studio: 'warner brothers',
    linkId: 'nnCZ4dfrxpo',
    likes: 16211,
    views: 1177987,
    year: 2023,
    channelId: '@WarnerBrosPictures'
  },
  {
    title: 'Kingsman: The Secret Service',
    duration: 167,
    thumbnail: 'images/thumbnails/kingsman_the_secret_service.webp',
    avatar: 'images/avatars/20_fox.jpg',
    studio: '20th century studio',
    linkId: 'kl8F-8tR8to',
    likes: 70258,
    views: 20756847,
    year: 2014,
    channelId: '@20thCenturyStudios'
  },
  {
    title: 'Logan',
    duration: 107,
    thumbnail: 'images/thumbnails/logan.webp',
    avatar: 'images/avatars/20_fox.jpg',
    studio: '20th century studio',
    linkId: 'Div0iP65aZo',
    likes: 335687,
    views: 35874123,
    year: 2017,
    channelId: '@20thCenturyStudios'
  },
  {
    title: 'Reacher',
    duration: 136,
    thumbnail: 'images/thumbnails/reacher.webp',
    avatar: 'images/avatars/amazon.jpg',
    studio: 'Prime video',
    linkId: 'GSycMV-_Csw',
    likes: 40658,
    views: 7687514,
    year: 2022,
    channelId: '@PrimeVideo'
  },
  {
    title: 'Samaritan',
    duration: 165,
    thumbnail: 'images/thumbnails/samaritan.webp',
    avatar: 'images/avatars/amazon.jpg',
    studio: 'Prime video',
    linkId: '9FKnTxSC16E',
    likes: 88957,
    views: 13654781,
    year: 2022,
    channelId: '@PrimeVideo'
  },

  {
    title: 'The tomorrow war',
    duration: 177,
    thumbnail: 'images/thumbnails/the_tomorrow_war.webp',
    avatar: 'images/avatars/amazon.jpg',
    studio: 'Prime video',
    linkId: 'QPistcpGB8o',
    likes: 56123,
    views: 12454381,
    year: 2021,
    channelId: '@PrimeVideo'
  },

  {
    title: 'The Batman',
    duration: 159,
    thumbnail: 'images/thumbnails/batman.webp',
    avatar: 'images/avatars/wb.jpg',
    studio: 'warner brothers',
    linkId: 'mqqft2x_Aa4',
    likes: 1321567,
    views: 58748632,
    year: 2022,
    channelId: '@WarnerBrosPictures'
  },
  {
    title: 'The Flash',
    duration: 176,
    thumbnail: 'images/thumbnails/flash.webp',
    avatar: 'images/avatars/wb.jpg',
    studio: 'warner brothers',
    linkId: 'hebWYacbdvc',
    likes: 254879,
    views: 16556987,
    year: 2023,
    channelId: '@WarnerBrosPictures'
  },
];

const btnCentered = document.querySelector('.btn-centered');
const videoFilters = document.querySelector('.video-filters');
const btnSerch = document.querySelector('.js_search');
const btnPopupClose = document.querySelector('.message-box__close');
const studioList = document.querySelector('.studio-list');
const videoList = document.querySelector('.video-list');
const filmCard = document.createElement('article');
filmCard.classList.add('film-card');
filmCard.innerHTML = '<div class="film-card__bg" style="background-image: url()" data-href=""><span class="film-card__duration"></span><span class="film-card__date"></span></div><div class="film-card__details"><div class="film-card__title"><a class="film-card__avatar" href="https://www.youtube.com/" target="_blank" title="Перейти на канал "><img class="avatar" src=""></a><div class="film-card__name"></div></div><div class="film-card__footer"><a class="film-card__channel" href="https://www.youtube.com/" target="_blank" title="Перейти на канал "></a><div class="film-card__views"> переглядів</div><div class="film-card__likes"> вподобали </div></div></div>';
const studioCard = document.createElement('div');
studioCard.classList.add('studio-list__item');
studioCard.innerHTML = '<img class="avatar" src="" alt="">';
let title = filmCard.querySelector('.film-card__name');
let duration = filmCard.querySelector('.film-card__duration');
let avatar = filmCard.querySelector('.film-card__avatar');
let thumbnail = filmCard.querySelector('.film-card__bg');
let date = filmCard.querySelector('.film-card__date');
let likes = filmCard.querySelector('.film-card__likes');
let views = filmCard.querySelector('.film-card__views');
let studio = filmCard.querySelector('.film-card__channel');
const arrayForVideos = [];
const arrayForStudios = [];
let arrSorted = [];
let arrForSort = [];

const insertCardsOfStudio = (videos, arr, channel) => {
  copyVideos = [...videos];
  for (j = 0; j < copyVideos.length; j++) {
    let link = copyVideos[j].linkId;
    arr[j] = filmCard.cloneNode(true);
    arr[j].querySelector('.film-card__bg').setAttribute('style', `background-image: url(${copyVideos[j].thumbnail})`);
    arr[j].querySelector('.film-card__bg').addEventListener('click', () => {
      let trailer = document.querySelector('.popup');
      trailer.querySelector('iframe').setAttribute('src', `https://www.youtube.com/embed/${link}`)
      trailer.style.opacity = '1';
      trailer.style.zIndex = '100';
      trailer.style.visibility = 'visible';
    })
    arr[j].querySelector('.film-card__name').textContent = `${copyVideos[j].title}`;
    arr[j].querySelector('.film-card__duration').textContent = Math.floor(`${copyVideos[j].duration}` / 60) + ':' + (`${copyVideos[j].duration}` % 60 / 10).toString().replace('.', '');
    arr[j].querySelector('.film-card__date').textContent = `${copyVideos[j].year}`;
    arr[j].querySelector('.avatar').setAttribute('src', `${copyVideos[j].avatar}`);
    if (copyVideos[j].views > 999999) {
      arr[j].querySelector('.film-card__views').textContent = parseFloat(`${(copyVideos[j].views/1000000).toFixed(1)}`) + ' млн.' + arr[j].querySelector('.film-card__views').textContent;
    } else if (copyVideos[j].views > 999) {
      arr[j].querySelector('.film-card__views').textContent = parseFloat(`${(copyVideos[j].views/1000).toFixed(1)}`) + 'тис.' + arr[j].querySelector('.film-card__views').textContent;
    }
    if (copyVideos[j].likes > 999999) {
      arr[j].querySelector('.film-card__likes').textContent = parseFloat(`${(copyVideos[j].likes/1000000).toFixed(1)}`) + ' млн.' + arr[j].querySelector('.film-card__likes').textContent;
    } else if (copyVideos[j].likes > 999) {
      arr[j].querySelector('.film-card__likes').textContent = parseFloat(`${(copyVideos[j].likes/1000).toFixed(1)}`) + 'тис.' + arr[j].querySelector('.film-card__likes').textContent;
    }
    arr[j].querySelector('.film-card__channel').textContent = `${copyVideos[j].studio}`;
    arr[j].querySelector('.film-card__channel').setAttribute('href', `https://www.youtube.com/${copyVideos[j].channelId}`);
    arr[j].querySelector('.film-card__avatar').setAttribute('href', `https://www.youtube.com/embed/${copyVideos[j].linkId}`);
    if (channel === arr[j].querySelector('.film-card__channel').textContent) {
      videoList.append(arr[j]);
    }

  }
}

const insertCards = (videos, arr) => {
  copyVideos = [...videos];
  for (i = 0; i < copyVideos.length; i++) {
    let link = copyVideos[i].linkId;
    let trailer = document.querySelector('.popup');
    arr[i] = filmCard.cloneNode(true);
    arr[i].querySelector('.film-card__bg').setAttribute('style', `background-image: url(${copyVideos[i].thumbnail})`);
    arr[i].querySelector('.film-card__bg').addEventListener('click', () => {
      trailer.querySelector('iframe').setAttribute('src', `https://www.youtube.com/embed/${link}`)
      trailer.style.opacity = '1';
      trailer.style.zIndex = '100';
      trailer.style.visibility = 'visible';
    })
    document.querySelector('.popup__close').addEventListener('click', () => {
      trailer.querySelector('iframe').setAttribute('src', ``)
      trailer.style.opacity = '0';
      trailer.style.zIndex = '-1';
      trailer.style.visibility = 'hiden';
    })
    arr[i].querySelector('.film-card__name').textContent = `${copyVideos[i].title}`;
    arr[i].querySelector('.film-card__duration').textContent = Math.floor(`${copyVideos[i].duration}` / 60) + ':' + (`${copyVideos[i].duration}` % 60 / 10).toString().replace('.', '');
    arr[i].querySelector('.film-card__date').textContent = `${copyVideos[i].year}`;
    arr[i].querySelector('.avatar').setAttribute('src', `${copyVideos[i].avatar}`);
    if (copyVideos[i].views > 999999) {
      arr[i].querySelector('.film-card__views').textContent = parseFloat(`${(copyVideos[i].views/1000000).toFixed(1)}`) + ' млн.' + arr[i].querySelector('.film-card__views').textContent;
    } else if (copyVideos[i].views > 999) {
      arr[i].querySelector('.film-card__views').textContent = parseFloat(`${(copyVideos[i].views/1000).toFixed(1)}`) + 'тис.' + arr[i].querySelector('.film-card__views').textContent;
    }
    if (copyVideos[i].likes > 999999) {
      arr[i].querySelector('.film-card__likes').textContent = parseFloat(`${(copyVideos[i].likes/1000000).toFixed(1)}`) + ' млн.' + arr[i].querySelector('.film-card__likes').textContent;
    } else if (copyVideos[i].likes > 999) {
      arr[i].querySelector('.film-card__likes').textContent = parseFloat(`${(copyVideos[i].likes/1000).toFixed(1)}`) + 'тис.' + arr[i].querySelector('.film-card__likes').textContent;
    }
    arr[i].querySelector('.film-card__channel').textContent = `${copyVideos[i].studio}`;
    arr[i].querySelector('.film-card__channel').setAttribute('href', `https://www.youtube.com/${copyVideos[i].channelId}`);
    arr[i].querySelector('.film-card__avatar').setAttribute('href', `https://www.youtube.com/embed/${copyVideos[i].linkId}`);
    videoList.append(arr[i]);
  }
}

const insertStudios = (videos, arr) => {
  copyVideos = [...videos];
  arrForSort = [];
  arrSorted = [];
  for (let i = 0; i < copyVideos.length; i++) {
    arrForSort.push(copyVideos[i].avatar);
    arrSorted.push(copyVideos[i].studio);
  }
  arrForSort = Array.from(new Set(arrForSort));
  arrSorted = Array.from(new Set(arrSorted));
  for (let i = 0; i < arrForSort.length; i++) {
    arr[i] = studioCard.cloneNode(true);
    arr[i].setAttribute('data-studio', `${arrSorted[i]}`);
    arr[i].querySelector('.avatar').setAttribute('src', `${arrForSort[i]}`);
    arr[i].addEventListener('click', () => {
      clearArr(arrayForVideos);
      let attribute = arr[i].getAttribute('data-studio');
      if (attribute === 'warner brothers') {
        insertCardsOfStudio(videos, arrayForVideos, attribute);
      } else if (attribute === 'Prime video') {
        insertCardsOfStudio(videos, arrayForVideos, attribute);
      } else if (attribute === '20th century studio') {
        insertCardsOfStudio(videos, arrayForVideos, attribute);
      } else if (attribute === 'metro goldwyn mayer') {
        insertCardsOfStudio(videos, arrayForVideos, attribute);
      } else if (attribute === 'netflix') {
        insertCardsOfStudio(videos, arrayForVideos, attribute);
      } else if (attribute === 'marvel') {
        insertCardsOfStudio(videos, arrayForVideos, attribute);
      } else if (3) {}
      attribute = '';
    })
    studioList.append(arr[i]);
  }
}

function clearArr(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i].remove();
  }
}

function sortByViewsMax(arr) {
  arrSorted.splice(0, arrSorted.length);
  const videosCopy = [...arr];
  for (let i = videosCopy.length; i > 0; i--) {
    let maxIndex = 0;
    for (let j = 1; j < i; j++) {
      if (videosCopy[j].views > videosCopy[maxIndex].views) {
        maxIndex = j;
      }
    }
    arrSorted.push(videosCopy[maxIndex]);
    videosCopy.splice(maxIndex, 1);
  }
  return arrSorted;
}

function sortByViewsMin(arr) {
  arrSorted.splice(0, arrSorted.length);
  const videosCopy = [...arr];

  for (let i = videosCopy.length; i > 0; i--) {
    let maxIndex = 0;
    for (let j = 1; j < i; j++) {
      if (videosCopy[j].views > videosCopy[maxIndex].views) {
        maxIndex = j;
      }
    }
    arrSorted.unshift(videosCopy[maxIndex]);
    videosCopy.splice(maxIndex, 1);
  }
  return arrSorted;
}

function sortByLikesMax(arr) {
  arrSorted.splice(0, arrSorted.length);
  const videosCopy = [...arr];
  for (let i = videosCopy.length; i > 0; i--) {
    let maxIndex = 0;
    for (let j = 1; j < i; j++) {
      if (videosCopy[j].likes > videosCopy[maxIndex].likes) {
        maxIndex = j;
      }
    }
    arrSorted.push(videosCopy[maxIndex]);
    videosCopy.splice(maxIndex, 1);
  }
  return arrSorted;
}

function sortByLikesMin(arr) {
  arrSorted.splice(0, arrSorted.length);
  const videosCopy = [...arr];

  for (let i = videosCopy.length; i > 0; i--) {
    let maxIndex = 0;
    for (let j = 1; j < i; j++) {
      if (videosCopy[j].likes > videosCopy[maxIndex].likes) {
        maxIndex = j;
      }
    }
    arrSorted.unshift(videosCopy[maxIndex]);
    videosCopy.splice(maxIndex, 1);
  }
  return arrSorted;
}

function sortByLongest(arr) {
  arrSorted.splice(0, arrSorted.length);
  const videosCopy = [...arr];
  for (let i = videosCopy.length; i > 0; i--) {
    let maxIndex = 0;
    for (let j = 1; j < i; j++) {
      if (videosCopy[j].duration > videosCopy[maxIndex].duration) {
        maxIndex = j;
      }
    }
    arrSorted.push(videosCopy[maxIndex]);
    videosCopy.splice(maxIndex, 1);
  }
  return arrSorted;
}

function sortByShortest(arr) {
  arrSorted.splice(0, arrSorted.length);
  const videosCopy = [...arr];

  for (let i = videosCopy.length; i > 0; i--) {
    let maxIndex = 0;
    for (let j = 1; j < i; j++) {
      if (videosCopy[j].duration > videosCopy[maxIndex].duration) {
        maxIndex = j;
      }
    }
    arrSorted.unshift(videosCopy[maxIndex]);
    videosCopy.splice(maxIndex, 1);
  }
  return arrSorted;
}

function sortByNewest(arr) {
  arrSorted.splice(0, arrSorted.length);
  const videosCopy = [...arr];
  for (let i = videosCopy.length; i > 0; i--) {
    let maxIndex = 0;
    for (let j = 1; j < i; j++) {
      if (videosCopy[j].year > videosCopy[maxIndex].year) {
        maxIndex = j;
      }
    }
    arrSorted.push(videosCopy[maxIndex]);
    videosCopy.splice(maxIndex, 1);
  }
  return arrSorted;
}

function sortByOldest(arr) {
  arrSorted.splice(0, arrSorted.length);
  const videosCopy = [...arr];

  for (let i = videosCopy.length; i > 0; i--) {
    let maxIndex = 0;
    for (let j = 1; j < i; j++) {
      if (videosCopy[j].year > videosCopy[maxIndex].year) {
        maxIndex = j;
      }
    }
    arrSorted.unshift(videosCopy[maxIndex]);
    videosCopy.splice(maxIndex, 1);
  }
  return arrSorted;
}

btnCentered.addEventListener('click', (e) => {
  btnCentered.classList.add('hide');
  videoFilters.classList.remove('hide');
  btnSerch.classList.remove('hide');
  insertCards(videos, arrayForVideos);
})

btnSerch.addEventListener('click', () => {
  let promtText = prompt('Почніть пошук фільма').toLowerCase();
  let messageBox = document.querySelector('.message-box');
  for (let i = arrayForVideos.length - 1; i >= 0; i--) {
    if (!arrayForVideos[i].querySelector('.film-card__name').textContent.toLowerCase().includes(`${promtText}`)) {
      arrayForVideos[i].remove();
      arrayForVideos.splice(i, 1);
    }
  }
  if (arrayForVideos.length === 0) {
    messageBox.style.right = '50%';
    messageBox.style.opacity = '1';
    messageBox.style.zIndex = '100';
    messageBox.style.visibility = 'visible';
    document.querySelector('.message-box__body').textContent = 'Нічого не знайшов!';
  }
  btnPopupClose.addEventListener('click', () => {
    messageBox.style.right = '20px';
    messageBox.style.opacity = '0';
    messageBox.style.zIndex = '-1';
    messageBox.style.visibility = 'hiden';
  })
})





videoFilters.querySelector('[data-filter="all"]').addEventListener('click', () => {
  clearArr(arrayForVideos);
  clearArr(arrayForStudios);
  insertCards(videos, arrayForVideos);
})

videoFilters.querySelector('[data-filter="most-views"]').addEventListener('click', () => {
  clearArr(arrayForVideos);
  clearArr(arrayForStudios);
  sortByViewsMax(videos);
  insertCards(arrSorted, arrayForVideos);
})

videoFilters.querySelector('[data-filter="least-views"]').addEventListener('click', () => {
  clearArr(arrayForVideos);
  clearArr(arrayForStudios);
  sortByViewsMin(videos);
  insertCards(arrSorted, arrayForVideos);
})

videoFilters.querySelector('[data-filter="most-liked"]').addEventListener('click', () => {
  clearArr(arrayForVideos);
  clearArr(arrayForStudios);
  sortByLikesMax(videos);
  insertCards(arrSorted, arrayForVideos);
})

videoFilters.querySelector('[data-filter="least-liked"]').addEventListener('click', () => {
  clearArr(arrayForVideos);
  clearArr(arrayForStudios);
  sortByLikesMin(videos);
  insertCards(arrSorted, arrayForVideos);
})

videoFilters.querySelector('[data-filter="longest"]').addEventListener('click', () => {
  clearArr(arrayForVideos);
  clearArr(arrayForStudios);
  sortByLongest(videos);
  insertCards(arrSorted, arrayForVideos);
})

videoFilters.querySelector('[data-filter="shortest"]').addEventListener('click', () => {
  clearArr(arrayForVideos);
  clearArr(arrayForStudios);
  sortByShortest(videos);
  insertCards(arrSorted, arrayForVideos);
})

videoFilters.querySelector('[data-filter="newest"]').addEventListener('click', () => {
  clearArr(arrayForVideos);
  clearArr(arrayForStudios);
  sortByNewest(videos);
  insertCards(arrSorted, arrayForVideos);
})

videoFilters.querySelector('[data-filter="oldest"]').addEventListener('click', () => {
  clearArr(arrayForVideos);
  clearArr(arrayForStudios);
  sortByOldest(videos);
  insertCards(arrSorted, arrayForVideos);
})

videoFilters.querySelector('[data-filter="show-studio"]').addEventListener('click', () => {
  clearArr(arrayForVideos);
  clearArr(arrayForStudios);
  insertStudios(videos, arrayForStudios);
})