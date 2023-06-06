'use client';

import styles from "./post.module.css";
const Post = (props) => {
	const { post, onHide = () => {} } = props;
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<span>{post.title}</span>
				<button onClick={onHide}>X</button>
			</div>
			<div>{post.user}</div>
			<div>{post.date}</div>
			<div>{post.content}</div>
		</div>
	)

};

export default Post;
