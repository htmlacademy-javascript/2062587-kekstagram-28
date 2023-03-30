import { showBigPicture } from './big-picture.js';
const pictureContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const sameDescriptionsFragment = document.createDocumentFragment();
const createElements = (descriptionData) => {
  descriptionData.forEach(({url, description, likes, comments})=> {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.addEventListener('click', (evt) => {
      evt.preventDefault();
      showBigPicture(url, comments, likes, description);
    });

    sameDescriptionsFragment.append(pictureElement);
  });
  pictureContainer.append(sameDescriptionsFragment);
};
export {createElements};
