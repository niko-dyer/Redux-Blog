import React from 'react'
import { Card } from 'semantic-ui-react' 

const Account = () => (
    <Card>
        <Card.Content>
            <Card.Header>fullName</Card.Header>
            <Card.Meta>
                username
            </Card.Meta>
        </Card.Content>
        <Card.Content>
            <p>Email: email</p>
        </Card.Content>
    </Card>
)

export default Account