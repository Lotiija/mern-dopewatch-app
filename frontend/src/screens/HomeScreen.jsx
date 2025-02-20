import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';
import { useGetProductsQuery } from '../slices/productApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import { Link } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';




// import axios from 'axios';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
  });  

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const {data} = await axios.get('/api/products'); // Replace with your API endpoint
  //       setProducts(data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError('Error fetching data');
  //       setLoading(false);
  //     }
  //   };

  //   // console.log(data);
  //   fetchProducts();
  // }, []);


  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      {isLoading ? (
        <div><Loader /></div>
      ) : error ? (
        <Message variant='danger'>{error?.data?.message || error.error}</Message>
      ) : (
        <>
          <Meta />
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  ); };

export default HomeScreen;