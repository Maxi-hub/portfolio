import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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

  const handleClickExperience = (e) => {
    e.preventDefault();
    const experienceBox = document.getElementById('experienceBox');
    experienceBox.scrollIntoView({ behavior: "smooth" });
    handleCloseMenu();
  }

  const handleClickEducation = (e) => {
    e.preventDefault();
    const educationBox = document.querySelector('.education');
    educationBox.scrollIntoView({ behavior: "smooth" });
    handleCloseMenu();
  }

  const handleClickSkills = (e) => {
    e.preventDefault();
    const skillsBox = document.querySelector('.skills');
    skillsBox.scrollIntoView({ behavior: "smooth" });
    handleCloseMenu();
  }

  return (
    <header className="header center">
      <div href='#' className="left-part">резюме</div>

      <div className="right-part"
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
        <MenuItem underline="none" sx={{ color: 'black', fontFamily: 'Comfortaa, sans-serif' }} onClick={handleClickExperience} onClose={handleCloseMenu}>Опыт работы</MenuItem>
        <MenuItem underline="none" sx={{ color: 'black', fontFamily: 'Comfortaa, sans-serif' }} onClick={handleClickEducation} onClose={handleCloseMenu}>Образование</MenuItem>
        <MenuItem underline="none" sx={{ color: 'black', fontFamily: 'Comfortaa, sans-serif' }} onClick={handleClickSkills} onClose={handleCloseMenu}>Навыки</MenuItem>
        <MenuItem><Link href="/contacts" underline="none" sx={{ color: 'black', fontFamily: 'Comfortaa, sans-serif' }}>Контакты</Link></MenuItem>
      </Menu>
    </header>
  )
}
