const ItemListContainer = ({ mensaje }) => { // Desestructurar la prop
    return (
        <div>
            <h1>{mensaje}</h1> {/* Ahora puedes usar el valor correctamente */}
        </div>
    );
};
export default ItemListContainer