import React from 'react'
import { Form } from 'semantic-ui-react'

class AccountForm extends React.Component {
    state = { fullName: '', username: '', email: '' }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        const { fullName, username, email } = this.state
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                    label='New Name'
                    type='text'
                    name='fullName'
                    value={fullName}
                    onChange={this.handleChange}
                />
                <Form.Input
                    label='New Username'
                    type='text'
                    name='username'
                    value={username}
                    onChange={this.handleChange}
                />
                <Form.Input
                    label='New Email'
                    type='text'
                    name='email'
                    value={email}
                    onChange={this.handleChange}
                />
                <Form.Button color='blue'>Save</Form.Button>
            </Form>
        )
    }
}

export default AccountForm