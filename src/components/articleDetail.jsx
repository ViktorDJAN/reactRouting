import {useParams} from "react-router-dom";

const ArticleDetail = ({articles})=>{
    const {ids} = useParams();
    const article = articles.find(article =>article.id === parseInt(ids));
    console.log("ARRAY: " + articles.find(article =>article.id === parseInt(ids)));

    if(!article){
        return <div>Article is not found</div>
    }
    return (
        <div>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
        </div>
    );
};
export default ArticleDetail;