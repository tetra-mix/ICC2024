import { getAllProducts } from '../firebase/strorage';

export const ProductTag = () => {
    const productslist = getAllProducts();

    return (
        <>
            {
                productslist.then(docs => {
                    docs.map((doc) => {
                        <div>
                            <h1>{doc.title}</h1>
                            <h2>{doc.price}</h2>
                            <h3>{doc.kind}</h3>
                            <p>{doc.description}</p>
                        </div>
                    })
                })
            }
        </>
    );

}