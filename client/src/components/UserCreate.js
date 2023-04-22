import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

function UserCreate(props) {
  return (
    <Create title='Edit User'{...props}>
        <SimpleForm>
            <TextInput source='title'/>
            <TextInput multiline source='body'/>
            <DateInput label='Published' source='publishedAt'/>
        </SimpleForm>
    </Create>
  )
}

export default UserCreate