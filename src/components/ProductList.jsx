import {useParams} from "react-router-dom";
import Product from "./Product.jsx";
import Pagination from "./Pagination.jsx";
import React from "react";
import ProductDetail from "./ProductDetail.jsx";
import log from "eslint-plugin-react/lib/util/log.js";

const ProductList = ({products})=> {
    const {pageNumber} = useParams();


    const currentPage = pageNumber ? parseInt(pageNumber, 10) : 1;
    const productsPerPage = 3;
    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + productsPerPage);
    // !! here index = quantity commodity on current page
    // product is an object with whole parameters
    // Ключ (key) в React map — это специальный строковый атрибут,
    // который нужно указывать при создании списка элементов.
    // помогает React определять, какие элементы были изменены, добавлены или удалены
    return (
        <div>
            <h1>Product List</h1>
            {currentProducts.map((product, ind) => (
                <Product key={ind} product={product} />
            ))}

            <Pagination totalProducts={products.length}
                        productsPerPage={productsPerPage}
                        currentPage={currentPage}/>
        </div>
    )
}

export default ProductList;