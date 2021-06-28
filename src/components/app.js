import React, { Suspense } from 'react'
import './app.scss'
const Button = React.lazy(() => import('app1/Button'))

const SearchView = React.lazy(() => import('app1/SearchView'))
const WorkspacesView = React.lazy(() => import('app1/WorkspacesView'))

export const App = () => {
  return (
    <div className="app">
      <Suspense fallback={ <div>Loading search...</div> }>
        <SearchView />
      </Suspense>
      <Suspense fallback={ <div>Loading workspaces...</div> }>
        <WorkspacesView />
      </Suspense>
    </div>
  )
}
