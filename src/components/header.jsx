import React, { useState } from 'react';
import { Layout, Menu, Button, Drawer, Avatar } from 'antd';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import './navbar.css'; // CSS for styling
import Logo from './logo.jsx';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Toggle drawer visibility
  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  // Define menu items
  const menuItems = [
    { key: '1', label: <Link to="/" style={{ textDecoration: 'none' }}>Home</Link> },
    { key: '2', label: <Link to="/about" style={{ textDecoration: 'none' }}>About</Link> },
    { key: '3', label: 'Contact' },
  ];

  return (
    <Layout>
      <Header className="navbar">
        <div className="left-side">
          {/* Hamburger Icon for Side Menu */}
          <Button className="menu-icon" type="text" onClick={showDrawer}>
            <MenuOutlined style={{ fontSize: '24px', color: 'white' }} />
          </Button>

          {/* Logo */}
          <div className="logo">
            <Logo />
          </div>
        </div>

        {/* Centered SPACENEST text */}
        <div className="center-text">
          <h1>SPACENEST</h1>
        </div>

        {/* Auth Buttons (for larger screens) */}
        <div className="auth-buttons" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          

          <Link to="/login" style={{ display: 'flex', alignItems: 'center' ,textDecoration:'none'}}>
          <Button type="link" style={{ color: 'white' }}>Login</Button>
          </Link>

          {/* Sign Up button wrapped in Link */}
          <Link to="/register" style={{ display: 'flex', alignItems: 'center' }}>
            <Button type="primary">Sign Up</Button>
          </Link>

          {/* Profile Avatar */}
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
          />
        </div>

        {/* Drawer for Side Menu */}
        <Drawer
          title="Menu"
          placement="left"
          onClose={onClose}
          open={drawerOpen}
          width={200}
          styles={{
            body: { padding: 0 },
            content: { backgroundColor: '#001529', color: 'white' }
          }}
          closeIcon={<span style={{ color: 'white', fontSize: '20px' }}>✖</span>} // Customize close icon
        >
          <Menu
            mode="vertical"
            theme="dark"
            items={menuItems}
            style={{
              backgroundColor: '#001529',
              color: 'white',
              border: 'none',
              padding: '16px 0',
            }}
          />
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
