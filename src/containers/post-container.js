import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { getPost, getPosts } from 'actions'
import { Header, Post, Page404 } from 'components'

class PostContainer extends Component {
    componentDidMount() {
        const { posts, getPost, getPosts } = this.props

        if (posts.length > 0) {
            getPost()
        } else {
            getPosts()
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { location, posts, getPost } = this.props
        const isPostsChanged = prevProps.posts.length !== posts.length
        const isLocationChanged = prevProps.location.pathname !== location.pathname
        if (isPostsChanged || isLocationChanged) {
            getPost()
        }
    }

    render() {
        const { post, errors } = this.props
        if (errors) {
            return <Page404 />
        }
        return (
            <Fragment>
                <Header />
                <Post {...post} />
            </Fragment>
        )
    }
}

const mapStateToProps = ({ selectedPost, posts, errors }) => {
    return ({
        post: selectedPost,
        posts,
        errors
    })
}

const mapDispatchToProps = {
    getPost,
    getPosts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostContainer)