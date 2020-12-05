let isMenuHide = true;
let isTrainModeOn = true;
const pullOutMenuItems = [
  "Main Page", "Action (set A)", "Action (set B)",
  "Action (set C)", "Abjective", "Animal (set A)", 
  "Animal (set B)", "Clothes", "Emotion"
];
const mainScreenCards = [
  {title: "Action (set A)", imgSrc: "assets/images/dance.jpg"}, {title: "Action (set B)", imgSrc: "assets/images/swim.jpg"}, 
  {title: "Action (set C)", imgSrc: "assets/images/drop.jpg"}, {title: "Abjective", imgSrc: "assets/images/friendly.jpg"},
  {title: "Animal (set A)", imgSrc: "assets/images/cat.jpg"}, {title: "Animal (set B)", imgSrc: "assets/images/bird.jpg"},
  {title: "Clothes", imgSrc: "assets/images/blouse.jpg"}, {title: "Emotion", imgSrc: "assets/images/emotion.jpg"}
];
const cards = [
  {set: "Action (set A)", word: "Сry", translation: "Плакать", imageSrc: "./assets/images/cry.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Action (set A)", word: "Dance", translation: "Танцевать", imageSrc: "./assets/images/dance.jpg", audioSrc: "./assets/audio/dance.mp3"},
  {set: "Action (set A)", word: "Dive", translation: "Нырять", imageSrc: "./assets/images/dive.jpg", audioSrc: "./assets/audio/dive.mp3"},
  {set: "Action (set A)", word: "Draw", translation: "Рисоввть", imageSrc: "./assets/images/draw.jpg", audioSrc: "./assets/audio/draw.mp3"},
  {set: "Action (set A)", word: "Fish", translation: "Ловить рыбу", imageSrc: "./assets/images/fish.jpg", audioSrc: "./assets/audio/fish.mp3"},
  {set: "Action (set A)", word: "Fly", translation: "Летать", imageSrc: "./assets/images/fly.jpg", audioSrc: "./assets/audio/fly.mp3"},
  {set: "Action (set A)", word: "Hug", translation: "Обнимать", imageSrc: "./assets/images/hug.jpg", audioSrc: "./assets/audio/hug.mp3"},
  {set: "Action (set A)", word: "Jump", translation: "Прыгать", imageSrc: "./assets/images/jump.jpg", audioSrc: "./assets/audio/jump.mp3"},
  
  {set: "Action (set B)", word: "Open", translation: "Открывать", imageSrc: "./assets/images/open.jpg", audioSrc: "./assets/audio/open.mp3"},
  {set: "Action (set B)", word: "Play", translation: "Играть", imageSrc: "./assets/images/play.jpg", audioSrc: "./assets/audio/play.mp3"},
  {set: "Action (set B)", word: "Point", translation: "Указывать", imageSrc: "./assets/images/point.jpg", audioSrc: "./assets/audio/point.mp3"},
  {set: "Action (set B)", word: "Ride", translation: "Ездить", imageSrc: "./assets/images/ride.jpg", audioSrc: "./assets/audio/ride.mp3"},
  {set: "Action (set B)", word: "Run", translation: "Бегать", imageSrc: "./assets/images/run.jpg", audioSrc: "./assets/audio/run.mp3"},
  {set: "Action (set B)", word: "Sing", translation: "Петь", imageSrc: "./assets/images/sing.jpg", audioSrc: "./assets/audio/sing.mp3"},
  {set: "Action (set B)", word: "Skip", translation: "Пропускать, прыгать", imageSrc: "./assets/images/skip.jpg", audioSrc: "./assets/audio/skip.mp3"},
  {set: "Action (set B)", word: "Swim", translation: "Плавать", imageSrc: "./assets/images/swim.jpg", audioSrc: "./assets/audio/swim.mp3"},

  {set: "Action (set C)", word: "Argue", translation: "Спорить", imageSrc: "./assets/images/argue.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Action (set C)", word: "Build", translation: "Строить", imageSrc: "./assets/images/build.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Action (set C)", word: "Carry", translation: "Нести", imageSrc: "./assets/images/carry.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Action (set C)", word: "Catch", translation: "Ловить", imageSrc: "./assets/images/catch.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Action (set C)", word: "Drive", translation: "Водить машину", imageSrc: "./assets/images/drive.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Action (set C)", word: "Drop", translation: "Падать", imageSrc: "./assets/images/drop.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Action (set C)", word: "Pull", translation: "Тянуть", imageSrc: "./assets/images/pull.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Action (set C)", word: "Push", translation: "Толкать", imageSrc: "./assets/images/push.jpg", audioSrc: "./assets/audio/cry.mp3"},

  {set: "Abjective", word: "Big", translation: "Большой", imageSrc: "./assets/images/big.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Abjective", word: "Small", translation: "Маленький", imageSrc: "./assets/images/small.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Abjective", word: "Fast", translation: "Быстрый", imageSrc: "./assets/images/fast.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Abjective", word: "Slow", translation: "Медленный", imageSrc: "./assets/images/slow.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Abjective", word: "Friendly", translation: "Дружелюбный", imageSrc: "./assets/images/friendly.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Abjective", word: "Unfriendly", translation: "Недружелюбный", imageSrc: "./assets/images/unfriendly.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Abjective", word: "Young", translation: "Молодой", imageSrc: "./assets/images/young.jpg", audioSrc: "./assets/audio/cry.mp3"},
  {set: "Abjective", word: "Old", translation: "Старый", imageSrc: "./assets/images/old.jpg", audioSrc: "./assets/audio/cry.mp3"},

  {set: "Animal (set A)", word: "Cat", translation: "Кот", imageSrc: "./assets/images/cat.jpg", audioSrc: "./assets/audio/cat.mp3"},
  {set: "Animal (set A)", word: "Chick", translation: "Цыпленок", imageSrc: "./assets/images/chick.jpg", audioSrc: "./assets/audio/chick.mp3"},
  {set: "Animal (set A)", word: "Chicken", translation: "Курица", imageSrc: "./assets/images/chicken.jpg", audioSrc: "./assets/audio/chicken.mp3"},
  {set: "Animal (set A)", word: "Dog", translation: "Собака", imageSrc: "./assets/images/dog.jpg", audioSrc: "./assets/audio/dog.mp3"},
  {set: "Animal (set A)", word: "Horse", translation: "Лошадь", imageSrc: "./assets/images/horse.jpg", audioSrc: "./assets/audio/horse.mp3"},
  {set: "Animal (set A)", word: "Pig", translation: "Свинья", imageSrc: "./assets/images/pig.jpg", audioSrc: "./assets/audio/pig.mp3"},
  {set: "Animal (set A)", word: "Rabbit", translation: "Кролик", imageSrc: "./assets/images/rabbit.jpg", audioSrc: "./assets/audio/rabbit.mp3"},
  {set: "Animal (set A)", word: "Sheep", translation: "Овца", imageSrc: "./assets/images/sheep.jpg", audioSrc: "./assets/audio/sheep.mp3"},
  
  {set: "Animal (set B)", word: "Bird", translation: "Птица", imageSrc: "./assets/images/bird.jpg", audioSrc: "./assets/audio/bird.mp3"},
  {set: "Animal (set B)", word: "Fish", translation: "Рыба", imageSrc: "./assets/images/fish1.jpg", audioSrc: "./assets/audio/fish.mp3"},
  {set: "Animal (set B)", word: "Frog", translation: "Жаба", imageSrc: "./assets/images/frog.jpg", audioSrc: "./assets/audio/frog.mp3"},
  {set: "Animal (set B)", word: "Giraffe", translation: "Жираф", imageSrc: "./assets/images/giraffe.jpg", audioSrc: "./assets/audio/giraffe.mp3"},
  {set: "Animal (set B)", word: "Lion", translation: "Лев", imageSrc: "./assets/images/lion.jpg", audioSrc: "./assets/audio/lion.mp3"},
  {set: "Animal (set B)", word: "Mouse", translation: "Мышь", imageSrc: "./assets/images/mouse.jpg", audioSrc: "./assets/audio/mouse.mp3"},
  {set: "Animal (set B)", word: "Turtle", translation: "Черепаха", imageSrc: "./assets/images/turtle.jpg", audioSrc: "./assets/audio/turtle.mp3"},
  {set: "Animal (set B)", word: "Dolphin", translation: "Дельфин", imageSrc: "./assets/images/dolphin.jpg", audioSrc: "./assets/audio/dolphin.mp3"},

  {set: "Clothes", word: "Skirt", translation: "Юбка", imageSrc: "./assets/images/skirt.jpg", audioSrc: "./assets/audio/skirt.mp3"},
  {set: "Clothes", word: "Pants", translation: "Брюки", imageSrc: "./assets/images/pants.jpg", audioSrc: "./assets/audio/pants.mp3"},
  {set: "Clothes", word: "Blouse", translation: "Блузка", imageSrc: "./assets/images/blouse.jpg", audioSrc: "./assets/audio/blouse.mp3"},
  {set: "Clothes", word: "Dress", translation: "Платье", imageSrc: "./assets/images/dress.jpg", audioSrc: "./assets/audio/dress.mp3"},
  {set: "Clothes", word: "Boot", translation: "Ботинки", imageSrc: "./assets/images/boot.jpg", audioSrc: "./assets/audio/boot.mp3"},
  {set: "Clothes", word: "Shirt", translation: "Рубашка", imageSrc: "./assets/images/shirt.jpg", audioSrc: "./assets/audio/shirt.mp3"},
  {set: "Clothes", word: "Coat", translation: "Пальто", imageSrc: "./assets/images/coat.jpg", audioSrc: "./assets/audio/coat.mp3"},
  {set: "Clothes", word: "Shoe", translation: "Туфли", imageSrc: "./assets/images/shoe.jpg", audioSrc: "./assets/audio/shoe.mp3"},

  {set: "Emotion", word: "Sad", translation: "Грустный", imageSrc: "./assets/images/sad.jpg", audioSrc: "./assets/audio/sad.mp3"},
  {set: "Emotion", word: "Angry", translation: "Сердитый", imageSrc: "./assets/images/angry.jpg", audioSrc: "./assets/audio/angry.mp3"},
  {set: "Emotion", word: "Happy", translation: "Счастливый", imageSrc: "./assets/images/happy.jpg", audioSrc: "./assets/audio/happy.mp3"},
  {set: "Emotion", word: "Tired", translation: "Уставший", imageSrc: "./assets/images/tired.jpg", audioSrc: "./assets/audio/tired.mp3"},
  {set: "Emotion", word: "Surprised", translation: "Удивленный", imageSrc: "./assets/images/surprised.jpg", audioSrc: "./assets/audio/surprised.mp3"},
  {set: "Emotion", word: "Scared", translation: "Испуганный", imageSrc: "./assets/images/scared.jpg", audioSrc: "./assets/audio/scared.mp3"},
  {set: "Emotion", word: "Smile", translation: "Улыбка", imageSrc: "./assets/images/smile.jpg", audioSrc: "./assets/audio/smile.mp3"},
  {set: "Emotion", word: "Laugh", translation: "Смех", imageSrc: "./assets/images/laugh.jpg", audioSrc: "./assets/audio/laugh.mp3"},
];

function showOrHidePullOutMenu() {
  const menu = document.querySelector(".pull-out-menu");
  menu.style.transform = isMenuHide ? "translateX(37rem)" : "none";
  isMenuHide = !isMenuHide;
}

function changeBurger() {
  const topLine = document.querySelector(".top-line");
  const middleLine = document.querySelector(".middle-line");
  const bottomLine = document.querySelector(".bottom-line");

  if (isMenuHide) {

    topLine.style.transform = "translateY(.9rem) rotate(45deg) scaleX(1.2)";
    bottomLine.style.transform = "translateY(-.9rem) rotate(-45deg) scaleX(1.2)";
    middleLine.style.width = "0rem";

  } else {

    topLine.style.transform = "none";
    bottomLine.style.transform = "none";
    middleLine.style.width = "3.3rem";

  }
}

function createElement(elementType, elementСlasses, elementInnerText) {
  const element = document.createElement(elementType);

  if (elementСlasses) {
    
    for (let i = 0; i < elementСlasses.length; i++) {
      element.classList.add(elementСlasses[i]);
    }

  }

  if (elementInnerText) {

    element.innerText = elementInnerText;

  }

  return element;
}

function createMainScreen() {
  const header = createHeader();
  const mainSection = createMainSection();

  document.body.append(header);
  document.body.append(mainSection);
}

function createHeader() {
  const header = createElement("header", ["header"]);
  const wrapper = createElement("div", ["wrapper"]);
  const headerContent = createElement("div", ["header-content"]);
  const burger = createBurger();
  const switcher = createSwitcher();
  const pullOutMenu = createPullOutMenu();

  headerContent.append(burger);
  headerContent.append(switcher);

  wrapper.append(headerContent);

  header.append(wrapper);
  header.append(pullOutMenu);
  return header;
}

function createBurger() {
  const burger = createElement("div", ["burger"]);
  const topLine = createElement("div", ["top-line", "line"]);
  const middleLine = createElement("div", ["middle-line", "line"]);
  const bottomLine = createElement("div", ["bottom-line", "line"]);
  
  burger.addEventListener("click", () => {
    changeBurger();
    showOrHidePullOutMenu();
  });

  burger.append(topLine);
  burger.append(middleLine);
  burger.append(bottomLine);

  return burger;
}

function createSwitcher() {
  const switcher = createElement("div", ["switcher"]);
  const switherText = createElement("div", ["swither-text"], "train");
  const switcherSlider = createElement("div", ["switcher-slider"]);
  const switcherSliderInnerCircle = createElement("div", ["switcher-slider-inner-circle"]);

  switcherSlider.append(switcherSliderInnerCircle);

  switcher.append(switherText);
  switcher.append(switcherSlider);

  switcher.addEventListener("click", () => {
    onOrOffTrainMode();
  });

  return switcher;
}

function changeSwitcherTitle() {
  // сделать
}

function onOrOffTrainMode() {
  moveSwitcherSlider();
}

function moveSwitcherSlider() {
  isTrainModeOn = !isTrainModeOn;
  const switcherSlider = document.querySelector(".switcher-slider");
  
  if (!isTrainModeOn) {
    switcherSlider.style.transform = "translateX(-8rem)";
  } else {
    switcherSlider.style.transform = "none";
  }

}

function createMainSection() {
  const main = createElement("main", ["main"]);
  const wrapper = createElement("div", ["wrapper"]);
  const mainContent = createElement("div", ["main-content"]);

  for (let i = 0; i < mainScreenCards.length; i++) {

    const mainScreenCard = createMainScreenCard(i);
    mainContent.append(mainScreenCard);

  }

  wrapper.append(mainContent);
  main.append(wrapper);

  return main;
}

//для теста 
function createMainSectionTest(cardSet) {
  const main = createElement("main", ["main"]);
  const wrapper = createElement("div", ["wrapper"]);
  const mainContent = createElement("div", ["main-content"]);

  
  cards.forEach((cardObj) => {
    if (cardObj.set === cardSet) {
      const mainScreenCard = createWordCard(cardObj);
      mainContent.append(mainScreenCard);
    }
  });
  /*for (let i = 0; i < 8; i++) {

    const mainScreenCard = createWordCard();
    mainContent.append(mainScreenCard);

  }*/

  wrapper.append(mainContent);
  main.append(wrapper);

  return main;
}

function createMainScreenCard(mainScreenCardIndex) {
  const cardObj = mainScreenCards[mainScreenCardIndex];
  const card = createElement("div", ["card"]);
  const cardImage = createImage(cardObj.imgSrc);
  const cardTitle = createElement("p", ["card-title"], cardObj.title)
  const cardHover = createElement("div", ["card-hover"]);

  cardHover.addEventListener("click", (event) => {
    const mainSection = document.querySelector("main");
    mainSection.parentNode.removeChild(mainSection);
    
    const cardSet = event.target.parentNode.lastChild.innerText; 
    const newMainSection = createMainSectionTest(cardSet);
    document.body.append(newMainSection);

    const oldActiveListItem = document.querySelector(".list-item-active");
    oldActiveListItem.classList.remove("list-item-active");

    const listItems = document.querySelector(".menu-list").childNodes;
    listItems.forEach((listItem) => {
      if (listItem.innerText === cardSet) {
        listItem.classList.add("list-item-active");
        return;
      }
    });

    if (!isMenuHide) {
      changeBurger();
      showOrHidePullOutMenu();
    }

  });

  cardHover.addEventListener("mouseover", (event) => {
    const img = event.target.parentNode.firstChild;
    img.style.width = "18rem";
    img.style.height = "18rem";
    img.style.margin = "2rem auto 1rem auto";
  });

  cardHover.addEventListener("mouseout", (event) => {
    const img = event.target.parentNode.firstChild;
    img.style.width = "16rem";
    img.style.height = "16rem";
    img.style.margin = "3rem auto 2rem auto";
  });

  card.append(cardImage);
  card.append(cardHover);
  card.append(cardTitle);

  return card;
}

function createImage(imageSrc) {
  const image = createElement("img");
  image.setAttribute("src", imageSrc);

  return image;
}

function createPullOutMenu() {
  const menu = createElement("nav", ["pull-out-menu"]);
  const menuList = createElement("ul", ["menu-list"]);

  for (let i = 0; i < 9; i++) {
    const listItem = createElement("li", ["list-item"], pullOutMenuItems[i]);
    
    if (i === 0) {
      listItem.classList.add("list-item-active");
      listItem.addEventListener("click", () => {
        const mainSection = document.querySelector("main");
        mainSection.parentNode.removeChild(mainSection);
        
        const oldActiveListItem = document.querySelector(".list-item-active");
        oldActiveListItem.classList.remove("list-item-active");
  
        const newActiveListItem = event.target;
        newActiveListItem.classList.add("list-item-active");

        changeBurger();
        showOrHidePullOutMenu();
      
        const newMainSection = createMainSection();
        document.body.append(newMainSection);
      });
      menuList.append(listItem);
      continue;
    }

    listItem.addEventListener("click", (event) => {
      const mainSection = document.querySelector("main");
      mainSection.parentNode.removeChild(mainSection);

      const oldActiveListItem = document.querySelector(".list-item-active");
      oldActiveListItem.classList.remove("list-item-active");

      const newActiveListItem = event.target;
      newActiveListItem.classList.add("list-item-active");
      
      changeBurger();
      showOrHidePullOutMenu();

      const cardSet = event.target.innerText; 
      const newMainSection = createMainSectionTest(cardSet);
      document.body.append(newMainSection);
    });
    menuList.append(listItem);
  }

  menu.append(menuList);

  return menu;
}

function createWordCard(cardObj) {
  const cardWrapper = createElement("div", ["word-card-wrapper"]);
  const cardFront = createElement("div", ["word-card", "word-card-front"]);
  const cardBack = createElement("div", ["word-card", "word-card-back"]);
  const imageFront = createImage(cardObj.imageSrc);
  const imageBack = createImage(cardObj.imageSrc);
  const cardFrontTitle = createElement("p", ["card-title"], cardObj.word);
  const cardBackTitle = createElement("p", ["card-title"], cardObj.translation);
  const audio = createElement("audio");
  audio.setAttribute("src", cardObj.audioSrc);
  const cardHoverFront = createElement("div", ["card-hover"]);
  const cardHoverBack = createElement("div", ["card-hover"]);
  const rotate = createElement("div", ["rotate"]);

  cardHoverFront.addEventListener("click", () => {
    audio.play();
  });
  
  rotate.addEventListener("click", () => {
    cardWrapper.style.transition = "transform 1s, box-shadow .3s";
    cardWrapper.style.transform = "rotate3d(0, 1, 0, 180deg)";//test

    cardBack.addEventListener("mouseout", () => {
      cardWrapper.style.transform = "none";
    });
  });
 
  cardFront.append(cardHoverFront);
  cardFront.append(rotate);
  cardFront.append(imageFront);
  cardFront.append(cardFrontTitle);
  cardFront.append(audio);
  
  cardBack.append(cardHoverBack);
  cardBack.append(imageBack);
  cardBack.append(cardBackTitle);

  cardWrapper.append(cardBack);
  cardWrapper.append(cardFront);

  return cardWrapper;
}

createMainScreen();