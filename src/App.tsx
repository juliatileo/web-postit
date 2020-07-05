import React from 'react'

import usePersistedState from './utils/usePersistedState'
import session from './services/session'

import Header from './components/Header'
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import New from './components/Posts/new'
import Popular from './components/Posts/popular'
import Submit from './components/SubmitPost'
import PostView from './components/PostView'
import Comments from './components/Comments'
import Profile from './components/Profile'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import { ThemeProvider } from 'styled-components'
import Global from './styles/global'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState('theme', light)
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Global />
        <Header toggleTheme={toggleTheme} />
        {session.isLogado() ? (
          <>
            <Route exact path="/" component={Home} />
            <Route path="/posts/new" component={New} />
            <Route path="/posts/popular" component={Popular} />
            <Route path="/posts/submit" component={Submit} />
            <Route path="/post/:id" component={PostView} />
            <Route path="/posts/comments/:id" component={Comments} />
            <Route path="/profile/:id" component={Profile} />
          </>
        ) : (
          <>
            <Route exact path="/" component={Home} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
          </>
        )}
      </Router>
    </ThemeProvider>
  )
}

export default App
