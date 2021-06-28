import React, { Suspense } from 'react'
import './app.scss'
const Button = React.lazy(() => import('app1/Button'))

export const App = () => {
  return (
    <div className="app">
      <Suspense fallback={ <div>Loading...</div> }>
        <Button color="var(--color-unc)">Click Me</Button>
      </Suspense>
    </div>
  )
}
