export const BookCard = (book) => {
  const { id, title, author, onAdd } = book;
  return (
    <div>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <br />
      <button onClick={() => onAdd(id)}>Добавить в избранное</button>
    </div>
  );
};
