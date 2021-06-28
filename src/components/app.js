import React, { Suspense } from 'react'
import './app.scss'
import { Link, Router } from '@reach/router'

const SearchView = React.lazy(() => import('app1/SearchView'))
const WorkspacesView = React.lazy(() => import('app1/WorkspacesView'))

export const App = () => {
  return (
    <div className="app">
      <header>
        <Link to="/search">Search</Link> | <Link to="/workspaces">Workspaces</Link>
      </header>
      <Router>
        <Suspense fallback={ <div>Loading search...</div> } path="/search">
          <SearchView />
        </Suspense>
        <Suspense fallback={ <div>Loading workspaces...</div> } path="/workspaces">
          <WorkspacesView />
        </Suspense>
      </Router>
    </div>
  )
}
