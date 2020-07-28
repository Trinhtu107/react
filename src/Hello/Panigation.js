import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";

const Listing = () => {
    const [posts, setPosts] = useState([]);
    const [activePage, setActivePage] = useState(1);


    useEffect(() => {
        setPosts(data) // new
    }, []);


    const renderPost = posts.length > 0 ? posts.map((item, index) => {
        if( activePage == 1 && item.id < 10) {
            return (<h3>{item.title}</h3>);
        }
        if(activePage > 1 && item.id > (activePage-1)*10 && item.id < activePage*10){
            return (<h3>{item.id}</h3>);
        }
    }) :  <h1>Loading posts...</h1>;
    const handlePageChange = (pageNumber) =>  {
        setActivePage(pageNumber);
    };
    return (
        <div className={"container"}>
            <div className={"row"}>
                <Container>
                    {renderPost}
                </Container>
                <Pagination
                    activePage={activePage}
                    itemsCountPerPage={10}
                    totalItemsCount={posts.length}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                    itemClass="page-item"
                    linkClass="page-link"
                />
            </div>
        </div>
    );
};
export default Listing;