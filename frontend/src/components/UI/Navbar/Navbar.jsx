import * as React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { deleteAuth } from '../../../store/auth/actionsCreators'


function Navbar() {
  const user = useSelector((state) => state.auth.User);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickRega = (e) => {
    e.preventDefault();
    navigate('/registration')
  }

  const handleClickLoga = (e) => {
    e.preventDefault();
    navigate('/login')
  }

  const handleClickSearch = (e) => {
    e.preventDefault();
    navigate('/search')
  }

  const handleClickLk = (e) => {
    e.preventDefault();
    navigate('/profile')
  }

  const handleClickRecipes = (e) => {
    e.preventDefault();
    navigate('/my_recipes')
  }

  const handleClickFavorites = (e) => {
    e.preventDefault();
    navigate('/my_favorites')
  }
  const handleClickLogout = (e) => {
    e.preventDefault();
    dispatch(deleteAuth())
  }

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
      <AppBar position="static" className="nav" >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
              }}
              className="typography"
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                className="typography">
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
                className="typography">
                <MenuItem className="typography">
                  <Typography textAlign="center" className="typography">page</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
                color: 'dark grey',
                textDecoration: 'none',
              }}
            >
              Главная
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            { !Object.keys(user).length ? (
              <><Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleClickRega}>
                Зарегистрироваться
              </Button><Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleClickLoga}>
                  Авторизоваться
                </Button><Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleClickSearch}>
                  Поиск блюд
                </Button></>
              ) : (
              <><Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleClickSearch}>
                  Поиск блюд
                </Button><Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleClickLogout}>
                    Выход
                  </Button></>
              )}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
            { !Object.keys(user).length ? (
               <Tooltip title="Open settings" className="avatar_profile" style={{'display': 'none'}}>
               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
               </IconButton>
             </Tooltip>
            ) : (
                <><Tooltip title="Open settings" className="avatar_profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip><Menu
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
                    <MenuItem>
                      <Typography textAlign="center" onClick={handleClickLk}>Профиль</Typography>
                    </MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center" onClick={handleClickRecipes}>Мои рецепты</Typography>
                    </MenuItem>
                    <MenuItem>
                      <Typography textAlign="center" onClick={handleClickFavorites}>Избранное</Typography>
                    </MenuItem>
                    <MenuItem>
                      <Typography textAlign="center" onClick={handleClickLogout}>Выход</Typography>
                    </MenuItem>
                  </Menu></>
            )}
              </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}

export default Navbar;
