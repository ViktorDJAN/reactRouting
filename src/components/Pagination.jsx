import  React from "react";
import {Link} from 'react-router-dom';


function Pagination({totalProducts,productsPerPage, currentPage}){
    const totalPages = Math.ceil(totalProducts/productsPerPage);

    return(
        <div>
            <h3>Pagination</h3>
            {Array.from({length:totalPages},(w, index)=>(
                    <Link key={index} to={`/page/${index+1}`}>{index+1} </Link>

                ))}
        </div>
    );
}
export default Pagination;