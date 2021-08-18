import React from 'react';
import { slide as Menu } from 'react-burger-menu';


const SidebarItem = () => {
  return (
    <Menu>
      <a className='menu-item' href='/'>
        홈
      </a>
      <a className='menu-item' href='/saferoad'>
        안심거리 모아보기
      </a>
      <a className='menu-item' href='/safehouse'>
        지킴이집 모아보기
      </a>
      <a className='menu-item' href='/motivation'>
        제작 동기
      </a>
    </Menu>
  );
};

export default SidebarItem;