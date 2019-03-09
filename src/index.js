import behanceData from '../data/behance-data.js';
import { loadArtGallery } from '../src/template-component.js';

console.log(behanceData.projects);
loadArtGallery(behanceData.projects);

