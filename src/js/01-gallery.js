import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.body.querySelector('.gallery'),
};

renderGallery(galleryItems, refs.gallery);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryMarkup(galleryItems) {
  const galleryMarkup = galleryItems.reduce(
    (acc, { preview, original, description }) => {
      const itemMarkup = `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`;
      return (acc += itemMarkup);
    },
    ``
  );

  return galleryMarkup;
}
function renderGallery(galleryItems, gallery) {
  gallery.innerHTML = createGalleryMarkup(galleryItems);
}
