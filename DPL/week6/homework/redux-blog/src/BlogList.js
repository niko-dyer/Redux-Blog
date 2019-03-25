import React from 'react'
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const BlogList = ({ blogs }) => {
    return (
        <div>
            <List link>
                <List.Item active>Blogs</List.Item>
                {blogs.map( b => {
                    return (
                        <List.Item as={Link} to='/blog' key={b.id} >
                            {b.name}
                        </List.Item>
                    )
                })}
            </List>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { blogs: state.blogs }
}

export default connect(mapStateToProps)(BlogList)