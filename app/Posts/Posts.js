'use client';
import { useQuery, gql } from "@apollo/client";
import Post from "../Post"

const POSTS_QUERY = `
	query Posts($offset: Int!, $limit: Int!) {
		Post(offset: $offset, limit: $limit) {
			id
			title
			content
		}
	}
`

const Posts = () => {
	const { loading, data } = useQuery(gql`${POSTS_QUERY}`, {
		variables: {
			offset: 0,
			limit: 10
		}
	})

	if (loading || !data) {
		return <div>Loading state</div>
	}

	const { Post: posts } = data;

	return (
		<>
			{posts.map((post, i) => (
				<Post post={post} key={`${i}_post`} />
			))}
		</>
	);
};

export default Posts;