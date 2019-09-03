import React from 'react'
import * as PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './style.module.css'

const Tag = ({ id, name, slug }) => (
    <span key={id}>
        <Link
            to={`/tags/${slug}`}>
            {name}
        </Link>
        {' '}
    </span>
)

Tag.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    slug: PropTypes.string,
}

export const Tags = ({ tags }) => (
    <div className={styles.root}>{tags.map(Tag)}</div>
)

Tags.propTypes = {
    tags: PropTypes.array,
}
