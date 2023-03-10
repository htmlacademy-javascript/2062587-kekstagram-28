const PHOTO_COUNT = 25;
const NAMES = ['Илья', 'Анна', 'Савелий', 'Андрей', 'Григорий', 'Анна', 'Татьяна'];
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Вид на санаторий со стороны провала',
  'Триумфальная арка',
  'Зеленая лагуна',
  'А еще у меня есть фотоаппарат',
  'Рисовые близнецы',
  'Baby you can drive my car',
  'Клубничка',
  'Натюрморт',
  'Первым делом самолеты!',
  'Порядок',
  'Мечта',
  'Вот, во что превратился Хорьх',
  'Салат',
  'Кэтбургер',
  'Книги на столе',
  'Глубина',
  'Вас много, я один',
  'The Real America',
  'HighTech',
  ' Welcome to the Hotel California',
  'Лучшее блюдо',
  'Sunshine Reggae',
  'Себастьян',
  'Руки вверх',
  'Хочу такую!'
];

const Likes = {
  MIN: 15,
  MAX: 200
};

const Comments = {
  MIN: 1,
  MAX: 6
};
const photos = [];
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const addComment = (index) => ({
  id: index,
  avatar: `img/${index + 1}.svg`,
  message: COMMENT_LINES[getRandomInteger(0, (COMMENT_LINES.length - 1))],
  name: NAMES[getRandomInteger(0, (NAMES.length - 1))],
});

const addPhoto = (index) => ({
  id: index,
  url: `photos/${index + 1}.jpg`,
  description: DESCRIPTIONS[getRandomInteger(0, (DESCRIPTIONS.length - 1))],
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
  comments: Array.from({length: getRandomInteger(Comments.MIN, Comments.MAX)}, (_, idx) => addComment(idx)),
});

const addPhotos = () => {
  for (let i = 0; i < PHOTO_COUNT; i++) {
    photos.push(addPhoto(i));
  }
};
addPhotos();
