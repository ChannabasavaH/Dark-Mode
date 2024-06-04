import React from 'react'
import ChildComponent from '../childcomponent/ChildComponent';
import Button from '../childcomponent/Button';

const ReactComponent = () => {


  return (
    <div className='react-component'>
       <ChildComponent title = "Welcome">
          <Button>Sign-in</Button>
          <Button>Sign-Up</Button>
       </ChildComponent>
    </div>
  )
}

export default ReactComponent