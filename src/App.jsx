import './App.css'
import {Route, Routes} from "react-router-dom";

// add npm install react-router-dom
// add obligatory browserRouter component as shown below
import {BrowserRouter} from 'react-router-dom'
import ArticleDetail from "./components/articleDetail.jsx";
import ArticleList from "./components/articleList.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetail from "./components/ProductDetail.jsx";


function App() {
    const products = [
        {id: 1, name: "article_1", description: "Content of article_1", price: "100 $"},
        {id: 2, name: "article_2", description: "Content of article_2", price: "200 $"},
        {id: 3, name: "article_3", description: "Content of article_3", price: "300 $"},
        {id: 4, name: "article_4", description: "Content of article_4", price: "400 $"},
        {id: 5, name: "article_5", description: "Content of article_5", price: "500 $"},
        {id: 6, name: "article_6", description: "Content of article_6", price: "600 $"},
        {id: 7, name: "article_7", description: "Content of article_7", price: "700 $"},
        {id: 8, name: "article_8", description: "Content of article_8", price: "800 $"},
        {id: 9, name: "article_9", description: "Content of article_9", price: "900 $"},
        {id: 10, name: "article_10", description: "Content of article_10", price: "1000 $"},
    ];

    return (

        <BrowserRouter>

            <Routes>
                <Route path={"/page/:pageNumber"} element={<ProductList products={products}/>}/>
                <Route path={"/product/:productId"} element={<ProductDetail products={products}/>}/>
                <Route path={"/"} element={<ProductList products={products}/>}/>
            </Routes>


        </BrowserRouter>


    )
}

export default App


//////////////////////////// second part of the lesson/////////////////////////////
// function App() {
//     const articles = [
//         {id: 1, title: "article_1", content: "Content of article_1"},
//         {id: 2, title: "article_2", content: "Content of article_2"},
//         {id: 3, title: "article_3", content: "Content of article_3"},
//         {id: 4, title: "article_4", content: "Content of article_4"},
//         {id: 5, title: "article_5", content: "Content of article_5"},
//     ]
//
//     return (
//
//         <BrowserRouter>
//
//             <Routes>
//                 <Route path={"/articles/:ids"} element={<ArticleDetail articles={articles}/>}/>
//                 <Route path={"*"} element={<ArticleList articles={articles}/>}/>
//             </Routes>
//
//
//         </BrowserRouter>
//
//
//     )
// }
//
// export default App


////////////////////////////////////////////////////////////////// first part of LESSON///////////////////////
//
// function MouseInfo1({x, y}) {
//     return (
//         <div>
//             <p>{x} and {y}</p>
//         </div>
//     )
//
//
// }
//
//
// const MouseTracker = ({textRendering}) => {
//     const [position, setPosition] = useState(20)
//     const [coordinates, setCoordinates] = useState({x: 5, y: 3});
//
// // console.log(textRendering)
//
//     function handleOne() {
//         console.log("CUTTENT STATE: " + position);
//         setPosition(position + 1);
//         console.log("AFTER CLICKing: " + position);
//
//     }
//
//     const handleTwo = () => {
//         addEventListener("click", function (event) {
//             console.log("PRESSED BRO")
//         })
//     }
//
//     function handleTwo2() {
//         addEventListener("mousemove", function (event) {
//             console.log(event.clientX + "__" + event.clientY)
//         })
//
//     }
//
//     const handleTwo3 = (event) => {
//         setCoordinates({x: event.clientX, y: event.clientY});
//         // console.log(coordinates.x +"_X : " + coordinates.y + "_Y");
//         printHandle3(coordinates.x, coordinates.y);
//     }
//
//     function printHandle3(x, y) {
//         console.log(x + " " + y);
//
//     }
//
//
//     return (
//         <div style={{height: "12vh", border: "1px solid red"}} onMouseMove={handleTwo3}>
//             {textRendering(coordinates)}
//         </div>
//
//
//     )
// }
//
// function Experiment({someText}) {
//
//     return (
//         <div className="my_class1">
//             <p>{someText}</p>
//         </div>
//     );
// }


// <MouseTracker>
//                     {(x, y) =>
//                         <ul>
//                             <li>{`${x}`}</li>
//                             <li>{`${y}`}</li>
//                         </ul>}
//                 </MouseTracker>
//                 <p>sad</p>
//                 {/*<MouseTracker render={({x1, y1}) => <MouseInfo x={x1} y={y1}/>}/>*/}
//
//                 <h2>Example_3 usage of **props.children** </h2>
//                 <br/>
//                 <Card title="Card_One">
//                     <p>Content of First card</p>
//                     <button>Do ONE</button>
//                 </Card>
//                 <Card title="Card_TWO">
//                     <p>Content of Second_card</p>
//                     <button>Do TWO</button>
//                 </Card>


// const MouseTracker = ({render}) => {
//     const [position, setPosition] = useState({x: 0, y: 0});
//
//     const handleMouseMove = (event) => {
//         setPosition({"x": event.clientX, "y": event.clientY});
//     };
//
//     return (
//         <div style={{height: "12vh", border: "1px solid red"}} onMouseMove={handleMouseMove}>
//             {render[position]}
//             {console.log(position)}
//             <p>name</p>
//         </div>
//
//     );
// };
//
// const MouseTracker = ({children}) => {
//     const [mouseLocation, setMouseLocation] = useState({x: 0, y: 0});
//
//     useEffect(() => {
//         const listener =
//             window.addEventListener('mousemove',
//                 e => setMouseLocation({x: e.clientX, y: e.clientY}))
//
//         return () => window.removeEventListener('mousemove', listener);
//     }, [])
//
//     return children(mouseLocation.x, mouseLocation.y)
// }
//
//
// export const MouseInfo = ({x, y}) => {
//     return (
//         <div>
//             <h2>Current position of your mouse</h2>
//             <p>X: {x}, Y:{y}</p>
//         </div>
//     );
// };
//
// const Card = ({title, children}) => {
//     return (
//         <div>
//             <h2>{title}</h2>
//             {children}
//         </div>
//     )
// }
//
// const BoderComp = ({children}) => {
//     return (
//         <div style={{border: "2px solid red"}}>
//             {children}
//         </div>
//     );
// };
//
// function DivWithChild({children}) {
//     return (
//         <div>
//             {children}
//             <div>
//                 <h1>SOLLO</h1>
//             </div>
//         </div>
//     )
// }