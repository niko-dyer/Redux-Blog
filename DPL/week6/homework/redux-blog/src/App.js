import React, { Component } from 'react'
import './App.css'
import { Container } from 'semantic-ui-react'
import BlogForm from './BlogForm'
import BlogList from './BlogList'

class App extends Component {
  render() {
    return (
      <Container>
        <BlogForm />
        <BlogList />
      </Container>
    )
  }
}

export default App
