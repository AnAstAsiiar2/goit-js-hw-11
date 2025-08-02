import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Створення екземпляру lightbox один раз
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

/**
 * Створює розмітку галереї на основі отриманих зображень
 * @param {Array} images
 */
export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${likes}</p>
          <p><b>Views:</b> ${views}</p>
          <p><b>Comments:</b> ${comments}</p>
          <p><b>Downloads:</b> ${downloads}</p>
        </div>
      </li>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh(); // Оновлення lightbox після додавання нових елементів
}

/** Очищає вміст галереї */
export function clearGallery() {
  galleryContainer.innerHTML = '';
}

/** Показує індикатор завантаження */
export function showLoader() {
  loader.classList.add('visible');
}

/** Ховає індикатор завантаження */
export function hideLoader() {
  loader.classList.remove('visible');
}
