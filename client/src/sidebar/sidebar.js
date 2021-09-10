import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

const SidebarItem = () => {
  return (
    <Menu>
      <Link to='/'>홈</Link>
      <Link to='/saferoad_all'>안심거리 모아보기</Link>
      <Link to='/safehouse_all'>지킴이집 모아보기</Link>
      <Link to='/motivation'>제작 동기</Link>
    </Menu>
  );
};

export default SidebarItem;