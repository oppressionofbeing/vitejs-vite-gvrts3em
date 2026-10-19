import { BookCard } from './BookCard';
import { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';

export const Catalog = ({}) => {
  const { addFavorites, books } = useContext(FavoritesContext);
  return (
    <section>
      {books.map((book) => (
        <BookCard onAdd={addFavorites} {...book} />
      ))}
    </section>
  );
};
