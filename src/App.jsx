import './App.css'
import {Route, Routes} from "react-router-dom";

// add npm install react-router-dom
// add obligatory browserRouter component as shown below
import {BrowserRouter} from 'react-router-dom'
import ArticleDetail from "./components/articleDetail.jsx";
import ArticleList from "./components/articleList.jsx";


function App() {
    const articles = [
        {id: 1, title: "article_1", content: "Content of article_1"},
        {id: 2, title: "article_2", content: "Content of article_2"},
        {id: 3, title: "article_3", content: "Content of article_3"},
        {id: 4, title: "article_4", content: "Content of article_4"},
        {id: 5, title: "article_5", content: "Content of article_5"},
    ]

    return (

        <BrowserRouter>

            <Routes>
                <Route path={"/articles/:ids"} element={<ArticleDetail articles={articles}/>}/>
                <Route path={"*"} element={<ArticleList articles={articles}/>}/>
            </Routes>


        </BrowserRouter>


    )
}

export default App
