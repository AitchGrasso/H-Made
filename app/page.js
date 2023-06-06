import Posts from './Posts';

const examplePosts = [
	{
		title: "Post title",
		user: "The user that posts",
		date: "12/25/2002",
		content: "This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah "
	},
	{
		title: "Post title 2",
		user: "The user that posts",
		date: "12/25/2002",
		content: "This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah "
	},
	{
		title: "Post title 3",
		user: "The user that posts",
		date: "12/25/2002",
		content: "This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah "
	},
	{
		title: "Post title 4",
		user: "The user that posts",
		date: "12/25/2002",
		content: "This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah "
	},
	{
		title: "Post title 5",
		user: "The user that posts",
		date: "12/25/2002",
		content: "This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah This is the content of the post lorem whatever lbah "
	}
];

export default function Home() {
  return (
    <main>
		<Posts posts={examplePosts} />
    </main>
  )
}
