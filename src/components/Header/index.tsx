import React, { useContext } from 'react'

import { Container, Logo, Navigation, LogoImg, Login } from './styles'
import logo from '../../assets/logoweb.svg'
import session from '../../services/session'

import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'
import { Link } from 'react-router-dom'
import { FaSignOutAlt } from 'react-icons/fa'

interface Props {
  toggleTheme(): void
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  const user = session.getUserInfo()
  return (
    <Container>
      <Logo>
        <Link to="/">
          <LogoImg src={logo} alt="logo" />
        </Link>
        {session.isLogado() ? (
          <Navigation>
            <Link
              to={{
                pathname: `/profile/${user.user.id}`,
              }}
            >
              <div>Profile</div>
            </Link>
            <Link to="/posts/popular">
              <div>Posts</div>
            </Link>
          </Navigation>
        ) : null}
      </Logo>
      <Login>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.1, colors.secundary)}
          onColor={shade(0.1, colors.secundary)}
        />
        {session.isLogado() ? (
          <button onClick={() => session.logout()}>
            Logout
            <FaSignOutAlt style={{ marginLeft: '3px' }} />
          </button>
        ) : (
          <>
            <Link to="/sign-in">
              <button>Sign in</button>
            </Link>
            <Link to="/sign-up">
              <button>Sign up</button>
            </Link>
          </>
        )}
      </Login>
    </Container>
  )
}

export default Header
