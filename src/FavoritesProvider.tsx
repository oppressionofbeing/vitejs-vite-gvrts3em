import { useState } from 'react';
import { FavoritesContext } from './FavoritesContext';
import { books } from './books';

export const FavoritesProvider = ({ children }) => {
  const [idsFavorites, setIdsFavorites] = useState([]);

  const favoriteBooks = books.filter((book) => idsFavorites.includes(book.id));

  const addFavorites = (id) => {
    setIdsFavorites((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };
  function removeFavorite(id) {
    setIdsFavorites((prev) => prev.filter((x) => x !== id));
  }

  return (
    <FavoritesContext
      value={{
        idsFavorites,
        addFavorites,
        removeFavorite,
        books,
        favoriteBooks,
      }}
    >
      {children}
    </FavoritesContext>
  );
};
