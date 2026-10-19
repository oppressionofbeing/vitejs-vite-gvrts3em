import { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext';

export default function RemoveExample() {
  const { idsFavorites } = useContext(FavoritesContext);

  return (
    <>
      <p>Избранных книг: {idsFavorites.length}</p>
    </>
  );
}
