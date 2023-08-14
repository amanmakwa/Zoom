import React, {useState} from 'react'
import Header from '../components/Header'
import { EuiFlexGroup, EuiForm } from '@elastic/eui'
import MeetingNameField from '../components/FormComponents/MeetingNameField'
import MeetingUsersField from '../components/FormComponents/MeetingUsersField'


const OnOneOnMeeting = () => {
    const [meetingName, setMeetingName] = useState("")
    const [selectedUsers, setSelectedUsers] = useState([]);

    const onUserChange = (selectedOptions:any) =>{
      setSelectedUsers(selectedOptions)
    }
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
                    <MeetingNameField 
                    label="Meeting Name"
                    placeholder="Meeting Name"
                    value={meetingName}
                    setMeetingName={setMeetingName}
                    />
                    <MeetingUsersField 
                      label="invite User"
                      options={users}
                      onChange={onUserChange}
                      selectedOptions={selectedUsers}
                      singleSelection={{ asPlainText:true }}
                      isClearable={false}
                      placeholder="Select a user"
                    />
            </EuiForm>
        </EuiFlexGroup>
    </div>
  )
}

export default OnOneOnMeeting