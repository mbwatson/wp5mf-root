import React, { Suspense } from 'react'
import './app.scss'
import { Link, Router, Switch } from '@reach/router'

const Button = React.lazy(() => import('app1/Button'))
const HomeView = React.lazy(() => import('app1/HomeView'))
const SearchView = React.lazy(() => import('app1/SearchView'))
const WorkspacesView = React.lazy(() => import('app1/WorkspacesView'))

export const App = () => {
  return (
    <div className="app">
      <header>
        <Link to="/">Home</Link> | <Link to="/search">Search</Link> | <Link to="/workspaces">Workspaces</Link>
      </header>
      <Suspense fallback={ <div>Loading view...</div> }>
        <Router>
          <HomeView exact path="/" />
          <SearchView exact path="/search" />
          <WorkspacesView exact path="/workspaces" />
          <HomeView default />
        </Router>
      </Suspense>
    </div>
  )
}
