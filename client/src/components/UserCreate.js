import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

function UserCreate(props) {
  return (
    <Create title='Create a User'{...props}>
        <SimpleForm>
            <TextInput source='title'/>
            {/* <TextInput multiline source='body'/> */}
            <TextInput source='name'/>
            <TextInput source='email'/>
            <DateInput label='Published' source='publishedAt'/>
        </SimpleForm>
    </Create>
  )
}

export default UserCreate