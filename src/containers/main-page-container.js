import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from 'actions'
import { Header, Posts } from 'components'

class MainPage extends Component {
    componentDidMount() {
        const { getPosts } = this.props
        if (getPosts) {
            getPosts()
        }
    }

    render() {
        const { posts } = this.props
        return (
            <Fragment>
                <Header />
                <Posts posts={posts} />
            </Fragment>
        )
    }
}

const mapStateToProps = ({ posts }) => ({
    posts
})

const mapDispatchToProps = {
    getPosts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)
