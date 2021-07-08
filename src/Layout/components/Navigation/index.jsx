import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo';
import Button from './Button';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    minWidth: 71,
  },
  navigation: {
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    height: '100vh',
    minWidth: 71,
    background: '#1A1731',
    borderWidth: '3px 0 3px 0',
    borderStyle: 'solid',
    borderImage: 'linear-gradient(90deg, #00E1FF 0%, #117EFF 100%) 1',
    boxSizing: 'border-box',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    marginTop: 18,
    marginBottom: 18,
  },
});

function Navigation() {
  const classes = useStyles();

  const createNav = (name, icon, selected = false) => {
    return { name, icon, selected };
  };

  const systemNavigation = [
    createNav('Análises', 'chart'),
    createNav('Jornadas', 'rocket'),
    createNav('Clientes', 'users'),
    createNav('CCM Cloud', 'cloud', true),
    createNav('Versão 01', 'link'),
  ];

  const userNavigation = [
    createNav('Administração', 'gem'),
    createNav('Help Desk', 'tools'),
    createNav('Trocar Conta', 'exchange'),
    createNav('Sair', 'logout'),
  ];

  return (
    <div className={classes.root}>
      <nav className={classes.navigation}>
        <Logo />

        <div className={classes.content}>
          <div>
            {systemNavigation.map((item) => (
              <Button key={`system_nav_${item.icon}`} {...item} />
            ))}
          </div>

          <div>
            {userNavigation.map((item) => (
              <Button key={`user_nav_${item.icon}`} {...item} />
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
