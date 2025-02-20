// import { FaShoppingCart, FaUser } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useLogoutMutation } from '../slices/userApiSlice';
// import { logout } from '../slices/authSlice';
// import SearchBox from './SearchBox';



// const Header = () => {
//   const { cartItems } = useSelector((store) => store.cart);

//   const { userInfo } = useSelector((state) => state.auth);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [logoutApiCall] = useLogoutMutation();

//   const logoutHandler = async () => {
//     try {
//       await logoutApiCall().unwrap();
//       dispatch(logout());
//       navigate('/login');
//     } catch (err) {
//       console.error(err);
//     }
//   };
  
//   return (
//     <header>
//       <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
//         <Container>
//           <Link to='/' className="text-decoration-none custom-link">Dope-Watches</Link>
//           <Navbar.Toggle aria-controls='basic-navbar-nav' />
//           <Navbar.Collapse id='basic-navbar-nav'>
//             <Nav className='ms-auto'>
//               <SearchBox />
//               <Link to='/cart' className="text-decoration-none custom-link">
//                 <FaShoppingCart /> Cart
//                 {cartItems.length > 0 && (
//                     <Badge pill bg='success' style={{ marginLeft: '5px' }}>
//                       {cartItems.reduce((a, c) => a + c.qty, 0)}
//                     </Badge>
//                   )}
//               </Link>
//               {/* <Link to='/login' className="text-decoration-none custom-link">
//                 <FaUser /> Sign In
//               </Link> */}
//                  {userInfo ? (
//                 <>
//                   <NavDropdown title={userInfo.name} id='username'>
//                     <Link to='/profile'>
//                       <NavDropdown.Item>Profile</NavDropdown.Item>
//                     </Link>
//                     <NavDropdown.Item onClick={logoutHandler}>
//                       Logout
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </>
//               ) : (
//                 <Link to='/login'>
//                   <Nav.Link>
//                     <FaUser /> Sign In
//                   </Nav.Link>
//                 </Link>
//               )}

//               {/* Admin Links */}
//               {userInfo && userInfo.isAdmin && (
//                 <NavDropdown title='Admin' id='adminmenu'>
//                   <Link to='/admin/productlist'>
//                     <NavDropdown.Item>Products</NavDropdown.Item>
//                   </Link>
//                   <Link to='/admin/orderlist'>
//                     <NavDropdown.Item>Orders</NavDropdown.Item>
//                   </Link>
//                   <Link to='/admin/userlist'>
//                     <NavDropdown.Item>Users</NavDropdown.Item>
//                   </Link>
//                 </NavDropdown>
//               )}
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Badge from 'react-bootstrap/Badge';
import { useSelector, useDispatch } from 'react-redux';
import { LinkContainer} from 'react-router-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useLogoutMutation } from '../slices/userApiSlice';
import { logout } from '../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import SearchBox from './SearchBox';


const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              Dope-Watches
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <SearchBox />
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                  {
                    cartItems.length > 0 && (
                      <Badge pill bg='success' style={{marginLeft:
                      '5px'}}>
                        { cartItems.reduce((a, c) => a + c.qty, 0)}
                      </Badge>
                    )
                  }
                </Nav.Link>
              </LinkContainer>
              { userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (<LinkContainer to="/login">
                <Nav.Link href='/login'>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>) }

              {/* Admin Links */}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;