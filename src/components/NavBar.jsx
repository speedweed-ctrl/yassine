import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{width:'101%'}}>
      <Container maxWidth="xxl" sx={{backgroundColor:'#217675',marginTop:'-0.5rem',width:'100%'}}>
        <Toolbar disableGutters>
          <FavoriteIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 , color:'#F1A629', }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color:'#F1A629',
            }}
          >
            Famille du coeur
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                <Link to='spec' style={{textDecoration:'none' , color:'black'}}>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">specialists</Typography>
                </MenuItem>
                </Link>
                <Link to='hs' style={{textDecoration:'none',color:'black'}}>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">guest houses</Typography>
                </MenuItem>
                </Link>
                <Link to='en' style={{textDecoration:'none' , color:'black'}}>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">les enterprise</Typography>
                </MenuItem>
                </Link>
                <Link to='pn' style={{textDecoration:'none' , color:'black'}}>
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">les partenaire</Typography>
                </MenuItem>
                </Link>
            
            </Menu>
          </Box>
          <FavoriteIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 ,color:'#F1A629',}} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              color:'#F1A629',
            }}
          >
             Famille du coeur

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link to='spec' style={{textDecoration:'none',}}>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',"&:hover":{color:'#F1A629',} }}
              >
                Specialists
              </Button>
              </Link>
              <Link to='hs' style={{textDecoration:'none'}}>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',"&:hover":{color:'#F1A629',} }}
              >
                Guest houses
              </Button>
              </Link>
              <Link to='en' style={{textDecoration:'none'}}>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',"&:hover":{color:'#F1A629',} }}
              >
                les entreprise
              </Button>
              </Link>
              <Link to='pn' style={{textDecoration:'none'}}>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',"&:hover":{color:'#F1A629',} }}
              >
                les partenaire
              </Button>
              </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
             </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
