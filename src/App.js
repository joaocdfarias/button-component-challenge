import React from 'react'
import { Button } from './Button'
import { MdHome } from 'react-icons/md'

const App = () => {
  return (
    <div>
      <Button disableShadow startIcon={<MdHome />} size="lg" variant="outline">
        Default
      </Button>
    </div>
  )
}

export default App
