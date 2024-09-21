import '../css/style.css';
import { images } from './data';

const galleryElement = document.querySelector('.gallery');

function createGallery(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
    })
    .join('');
}

galleryElement.innerHTML = createGallery(images);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
