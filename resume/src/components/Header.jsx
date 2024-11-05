import React, { useEffect } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';
import { useSelector } from 'react-redux';

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useSelector(state => state.theme);

  const changeColorMenu = () => {
    if (theme === 'light') {
      const burgerMenu = document.querySelectorAll('.burger-box__item');
      burgerMenu.forEach(menu => menu.style.border = '2px solid black');
    }
  }
  useEffect(() => {
    changeColorMenu();
  }, [theme])



  const handleClickMenu = (e) => {
    setAnchorEl(e.currentTarget);
    const item1 = document.querySelector('.item1');
    item1.style.transform = 'translate(7px, -13px) rotate(52deg)';
    item1.style.transformOrigin = 'left top';

    const item3 = document.querySelector('.item3');
    item3.style.transform = 'translate(-5px, -14px) rotate(-52deg)';
    item3.style.transformOrigin = 'right bottom';
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    const item1 = document.querySelector('.item1');
    item1.style.transform = 'inherit';
    item1.style.transformOrigin = 'right bottom';

    const item3 = document.querySelector('.item3');
    item3.style.transform = 'inherit';
    item3.style.transformOrigin = 'left top';
  };

  const handleClick = (e, selector) => {
    e.preventDefault();
    const targetBox = document.querySelector(selector);
    if (targetBox) {
      targetBox.scrollIntoView({ behavior: "smooth" });
    }
    handleCloseMenu();
  };

  return (
    <header className="header center">
      <p href='#' className="left-part">резюме</p>

      <div
        className="right-part"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickMenu}
      >
        <div className="burger-box">
          <div className="burger-box__item item1"></div>
          <div className="burger-box__item item2"></div>
          <div className="burger-box__item item3"></div>
        </div>
        <p>Меню</p>
      </div>
      <Menu
        id="baic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        sx={{ marginTop: '20px' }}
      >
        <MenuItem
          underline="none"
          sx={{ color: 'black', fontFamily: 'Comfortaa, sans-serif' }}
          onClick={(e) => handleClick(e, '.experience-box')}
          onClose={handleCloseMenu}>
          Опыт работы
        </MenuItem>
        <MenuItem
          underline="none"
          sx={{ color: 'black', fontFamily: 'Comfortaa, sans-serif' }}
          onClick={(e) => handleClick(e, '.education')}
          onClose={handleCloseMenu}>
          Образование
        </MenuItem>
        <MenuItem
          underline="none"
          sx={{ color: 'black', fontFamily: 'Comfortaa, sans-serif' }}
          onClick={(e) => handleClick(e, '.skills')}
          onClose={handleCloseMenu}>
          Навыки
        </MenuItem>
        <MenuItem
          underline="none"
          sx={{ color: 'black', fontFamily: 'Comfortaa, sans-serif' }}
          onClick={(e) => handleClick(e, '.projects')}
          onClose={handleCloseMenu}>
          Проекты
        </MenuItem>
        <MenuItem>
          <Link
            href="/contacts"
            underline="none"
            sx={{ color: 'black', fontFamily: 'Comfortaa, sans-serif' }}>
            Контакты
          </Link>
        </MenuItem>
      </Menu>
    </header>
  )
}
