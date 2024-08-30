import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, TextField, InputAdornment, Box, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  const [anchorElTools, setAnchorElTools] = useState(null);
  const [anchorElApi, setAnchorElApi] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleClickTools = (event) => {
    setAnchorElTools(event.currentTarget);
  };

  const handleCloseTools = () => {
    setAnchorElTools(null);
  };

  const handleClickApi = (event) => {
    setAnchorElApi(event.currentTarget);
  };

  const handleCloseApi = () => {
    setAnchorElApi(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handlePricingClick = () => {
    navigate('/pricing');
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ backgroundColor: 'white', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ gap: 4, justifyContent: 'center' }}>
          <Box sx={{ position: 'absolute', left: '90px' }}>
            <Typography 
              variant="h6" 
              sx={{ fontSize: '2.2rem', cursor: 'pointer' }}
              onClick={handleLogoClick}
            >
              Yaska
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 6, flexGrow: 1, justifyContent: 'center' }}>
            <Button
              color="inherit"
              sx={{ color: '#333', display: 'flex', alignItems: 'center' }}
              onClick={handleClickTools}
            >
              Tools
              <ArrowDropDownIcon sx={{ ml: 1 }} />
            </Button>
            <Menu
              anchorEl={anchorElTools}
              open={Boolean(anchorElTools)}
              onClose={handleCloseTools}
            >
              <MenuItem onClick={handleCloseTools}>Tool 1</MenuItem>
              <MenuItem onClick={handleCloseTools}>Tool 2</MenuItem>
              <MenuItem onClick={handleCloseTools}>Tool 3</MenuItem>
            </Menu>
            <Button
              color="inherit"
              sx={{ color: '#333' }}
              onClick={handlePricingClick}
            >
              Pricing
            </Button>
            <Button
              color="inherit"
              sx={{ color: '#333', display: 'flex', alignItems: 'center' }}
              onClick={handleClickApi}
            >
              API
              <ArrowDropDownIcon sx={{ ml: 1 }} />
            </Button>
            <Menu
              anchorEl={anchorElApi}
              open={Boolean(anchorElApi)}
              onClose={handleCloseApi}
            >
              <MenuItem onClick={handleCloseApi}>API 1</MenuItem>
              <MenuItem onClick={handleCloseApi}>API 2</MenuItem>
              <MenuItem onClick={handleCloseApi}>API 3</MenuItem>
            </Menu>
          </Box>
          <TextField
            variant="outlined"
            placeholder="Search Videos..."
            size="small"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                handleSearch();
              }
            }}
            sx={{
              width: '320px',
              borderRadius: '20px',
              padding: '5px',
              '& .MuiOutlinedInput-root': {
                padding: '0 10px',
                borderRadius: '20px',
              },
              '& .MuiInputAdornment-positionStart': {
                marginRight: '8px',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <ClearIcon
                    sx={{ cursor: 'pointer', color: '#4a90e2' }}
                    onClick={() => setSearchTerm('')}
                  />
                </InputAdornment>
              ),
            }}
          />
          <Button color="inherit" sx={{ ml: 2, color: '#333' }} onClick={handleLoginClick}>Log In</Button>
          <Button variant="outlined" color="primary" sx={{ borderColor: '#4a90e2', color: '#4a90e2' }} onClick={handleSignupClick}>Sign Up</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
