import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {

    /* Switch,
    Route, */
    Link,


    NavLink
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

/* 

import MakeAdmin from '../MakeAdmin/MakeAdmin';

import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrder from '../MyOrder/MyOrder';
import CustomerReview from '../CustomerReview/CustomerReview';
import Pay from '../Pay/Pay';
import CarShow from '../CarShow/CarShow';
 */


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { admin, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box sx={{ textAlign: 'left' }}>
                <Link style={{ textDecoration: 'none' }} to="/cars"> <Button color="inherit">All Cars</Button></Link> <br />


                {admin || <Box>
                    <Link style={{ textDecoration: 'none' }} to={`/dashboard/myOrder`}> <Button color="inherit">My Order</Button></Link><br />
                    <Link style={{ textDecoration: 'none' }} to={`/dashboard/review`}> <Button color="inherit">Review</Button></Link><br />
                    <Link style={{ textDecoration: 'none' }} to={`/dashboard/pay`}> <Button color="inherit">Pay Now</Button></Link><br />
                    <Button onClick={logout} color="inherit">Logout</Button> <br />
                </Box>

                }
            </Box>

            {admin && <Box sx={{ textAlign: 'left' }}>
                <Link style={{ textDecoration: 'none' }} to={`/dashboard/makeAdmin`}> <Button color="inherit">Make Admin</Button></Link><br />
                <Link style={{ textDecoration: 'none' }} to={`/dashboard/manageOrders`}> <Button color="inherit">Manage Orders</Button></Link><br />
                <Link style={{ textDecoration: 'none' }} to={`/dashboard/manageProducts`}> <Button color="inherit">Manage Courses</Button></Link><br />
                <Link style={{ textDecoration: 'none' }} to={`/dashboard/addProduct`}> <Button color="inherit">Add Course</Button></Link> <br />
                <Button onClick={logout} color="inherit">Logout</Button>
            </Box>}



        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography sx={{ textAlign: 'center' }} variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <Typography variant="h6" noWrap component="div">
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                {/*  <Switch>

                    <Route path={`/dashboard/review`}>
                        <CustomerReview></CustomerReview>
                    </Route>
                    <Route path={`/dashboard/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`/dashboard/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <AdminRoute path={`/dashboard/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`/dashboard/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>

                    <AdminRoute path={`/dashboard/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`/dashboard/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <Route >
                        <CarShow></CarShow>
                    </Route>
                </Switch> */}

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
