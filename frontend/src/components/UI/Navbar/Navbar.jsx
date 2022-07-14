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
// import { makeStyles } from "@material-ui/styles";

// import '../../../static/images/logo-cookmaster-копия2'

// import headerBackground from "../../../static/images/logo-cookmaster 2копия.png";
// const useStyles = makeStyles((theme) => ({
//   header: {
//     backgroundImage: `url(${headerBackground})`,
//   },
// }));

function Navbar() {

  // const classes = useStyles();


  const user = useSelector((state) => state.auth.User);
  const navigate = useNavigate();

  const handleClickHome = (e) => {
    e.preventDefault();
    navigate('/')
  }

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
    dispatch()
  }

  const handleClickFavorites = (e) => {
    e.preventDefault();
    navigate('/my_favorites')
  }
  const handleClickLogout = (e) => {
    e.preventDefault();
    dispatch(deleteAuth())
    navigate('/')
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
            <Typography
              variant="h6"
              noWrap
              href='#'
              component="a"
              sx={{
                mr: 2,
                display:  'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
              }}
              className="typography"
            onClick={handleClickHome}>
              <Avatar alt="Logo" src='https://cdn-icons-png.flaticon.com/512/3565/3565418.png' sx={{ marginRight: '10px'}} />
              CookMaster
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
                className="burger">
                    { !Object.keys(user).length ? (
                  <><MenuItem sx={{ my: 2, display: 'block' }} onClick={handleClickRega}>
                    Зарегистрироваться
                  </MenuItem><MenuItem sx={{ my: 2, display: 'block' }} onClick={handleClickLoga}>
                      Авторизоваться
                    </MenuItem><MenuItem sx={{ my: 2, display: 'block' }} onClick={handleClickSearch}>
                      Поиск блюд
                    </MenuItem></>
                  ) : (
                    <MenuItem sx={{ my: 2, display: 'block' }} onClick={handleClickSearch}>
                      Поиск блюд
                    </MenuItem>
                  )}
              </Menu>
            </Box>
            
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            { !Object.keys(user).length ? (
              <><Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleClickRega}>
                Зарегистрироваться
              </Button><Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleClickLoga}>
                  Авторизоваться
                </Button><Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleClickSearch}>
                  Поиск блюд
                </Button></>
              ) : (
              <Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleClickSearch}>
                  Поиск блюд
                </Button>
              )}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
            { !Object.keys(user).length ? (
              <Tooltip title="Open settings" className="avatar_profile" style={{'display': 'none'}}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={user.img} />
                </IconButton>
              </Tooltip>
            ) : (
                <><Tooltip title="Open settings" className="avatar_profile">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={user.img} />
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
                    <MenuItem onClick={handleClickLk}>
                      Профиль
                    </MenuItem>
                    <MenuItem onClick={handleClickLogout}>
                      Выход
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
