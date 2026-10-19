import type { Catalog } from "./Catalog";
import { useState } from "react";
export default function AddExample() {
const [favoriteIds, setFavoriteIds] = useState([]);
function addFavorite(id) {
setFavoriteIds(prev =>
prev.includes(id) ? prev : [...prev, id]);
}
return <>
<button onClick={() => addFavorite(2)}>
Добавить Хоббита
</button>
<p>Избранных книг: {favoriteIds.length}</p>
</>;
}