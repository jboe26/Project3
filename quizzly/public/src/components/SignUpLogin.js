import React from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'


function SignUpLogin (){
    return(
        <div>

        <ButtonToolbar>
          <Button variant="primary" size="lg">
            SignUp 
          </Button>
          <Button variant="secondary" size="lg">
            Login
          </Button>
        </ButtonToolbar>

        </div>
    )
}


export default SignUpLogin;