import CartWidget from "../cartWidget/cartWidget";
const NavBar = () => {
    return (
        <nav>
            <h3>Ecomerce</h3>
            <div>
                <button>Pantalones</button>
                <button>Remeras</button>
                <button>Zapatillas</button>
            </div>
            <CartWidget/>
        </nav>
    );
};

export default NavBar;