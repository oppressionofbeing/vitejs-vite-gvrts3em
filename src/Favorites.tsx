import { useContext } from 'react';
import { books } from './books';
import { FavoritesContext } from './FavoritesContext';

export default function Favorites({}) {
  const { favoriteBooks, removeFavorite, idsFavorites } =
    useContext(FavoritesContext);

  return (
    <>
      <p>Избранных книг: {idsFavorites.length}</p>
      {favoriteBooks.length === 0 && <p>Избранное пусто</p>}
      <ul>
        {favoriteBooks.map((book) => (
          <>
            <li key={book.id}>{book.title}</li>
            <button onClick={() => removeFavorite(book.id)}>Удалить</button>
          </>
        ))}
      </ul>
    </>
  );
}
