'use client';
import { useUser } from "./useUser";
import styles from "./post.module.css";

const Post = (props) => {
	const { post, onHide = () => {} } = props;
	const user = useUser();

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<span>{post.title}</span>
				<button onClick={onHide}>X</button>
			</div>
			<div>{post.user}</div>
			<div>{post.date}</div>
			<div>{post.content}</div>
			<div>{user?.email}</div>
		</div>
	);
};

export default Post;
