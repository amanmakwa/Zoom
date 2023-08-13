import React from 'react'
import Header from '../components/Header'
import { EuiFlexGroup, EuiForm } from '@elastic/eui'

const OnOneOnMeeting = () => {
  return (
    <div  
    style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
      }}
      >
        <Header/>
        <EuiFlexGroup justifyContent='center' alignItems='center'>
            <EuiForm>

            </EuiForm>
        </EuiFlexGroup>
    </div>
  )
}

export default OnOneOnMeeting