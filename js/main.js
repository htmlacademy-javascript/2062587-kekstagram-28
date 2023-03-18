import './data.js';
import { addPhotos} from './data.js';
import {createElements} from './pictures.js';

const descriptionData = addPhotos();
createElements(descriptionData);
