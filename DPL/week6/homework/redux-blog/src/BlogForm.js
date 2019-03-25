import React from 'react'
import { connect } from 'react-redux'
import { Header, Form } from 'semantic-ui-react'

class BlogForm extends React.Component {
    state = { name: '' }

    handleSubmit = (e) => {
        e.preventDefault()
        const { dispatch, id } = this.props
        const { name } = this.state
        const blog = { name, id }
        dispatch({ type: 'ADD_BLOG', blog})
        dispatch({ type: 'INC_ID' })
        this.setState({ name: '' })
    }

    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }

    render() {
        const { name } = this.state

        return (
            <div>
                <Header>Add a Blog</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input 
                        value={name}
                        onChange={this.handleChange}
                        name='name'
                    />
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { id: state.nextId }
}

export default connect(mapStateToProps)(BlogForm)