import './data.js';
import {photos} from './data.js';
import {createElements} from './pictures.js';

const descriptionData = photos.slice();
createElements(descriptionData);
