import FavoriteMovieDb from '../data/favorite-movie-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const likeButtonInitiator = {
  async init({ likeButtonContainer, movie }) {
    this._likeButtonContainer = likeButtonContainer;
    this._movie = movie;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._movie;

    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMovieExist(id) {
    const movie = await FavoriteMovieDb.getMovie(id);
    return !!movie;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMovieDb.putMovie(this._movie);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteMovieDb.deleteMovie(this._movie.id);
      this._renderButton();
    });
  },
};

export default likeButtonInitiator;
