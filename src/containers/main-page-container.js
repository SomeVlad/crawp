import { connect } from 'react-redux'
import { getPosts } from 'actions'
import { MainPage } from 'components/main-page'
import { selectPostCollection, selectPostIds } from 'selectors'

const mapStateToProps = state => ({
    posts: selectPostCollection(state),
    postIds: selectPostIds(state),
})

const mapDispatchToProps = {
    getPosts,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)
