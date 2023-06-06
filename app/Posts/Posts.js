'use client';

import { useState } from 'react';
import Post from "../Post"

const Posts = ({ posts = [] }) => {
	const [currentPosts, setCurrentPosts] = useState(posts);

	const removePost = (index) => {
		const newPosts = [...currentPosts];
		newPosts.splice(index, 1);
		setCurrentPosts(newPosts);
	}
	return (
		<>
			{currentPosts.map((post, i) => (
				<Post post={post} key={`${i}_post`} onHide={() => removePost(i)} />
			))}
		</>
	);
};

export default Posts;