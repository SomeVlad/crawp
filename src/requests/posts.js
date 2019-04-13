import axios from 'axios'
import { Endpoints } from 'endpoints'
import { posts as mockPosts } from 'mocks/posts'

export const postsRequest = () => {
    return axios
        .get(Endpoints.posts)
        .then(result => result.data)
        .catch(() => mockPosts)
}
