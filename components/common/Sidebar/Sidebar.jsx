//styles
import s from './Sidebar.module.css';
//comp
import { ActiveLink } from 'components/common';
import { Icon } from 'components/ui';
//other
import { menuItems } from './menuItems';

const Sidebar = () => {
  return (
    <ul className={s.sidebar}>
      {menuItems.map((link, index) => {
        return (
          <li key={index} className={s.item}>
            <ActiveLink href={link.path} activeClassName={s.active}>
              <a className={s.link}>
                <span className={s.wrap}>
                  <Icon>{link.icon}</Icon>
                </span>
                <span className={s.text}>{link.name}</span>
              </a>
            </ActiveLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Sidebar;
