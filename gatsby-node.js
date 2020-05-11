const path = require('path');
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	const blogPost = path.resolve('./src/templates/blogpost.js');
	return graphql(
		`
			{
				allContentfulBlogPost {
					edges {
						node {
							slug
							welcomeToMyBlog
						}
					}
				}
			}
		`
	)
		.then((result) => {
			if (result.errors) {
				console.log('Error retrieving contenful data: ', result.errors);
			}

			// Create blog posts createPages
			const blogPostTemplate = path.resolve(
				'./src/templates/blogpost.js'
			);

			result.data.allContentfulBlogPost.edges.forEach((edge) => {
				createPage({
					path: `/blogpost/${edge.node.slug}/`,
					component: slash(blogPostTemplate),
					context: {
						slug: edge.node.slug,
						id: edge.node.id,
					},
				});
			});
		})
		.catch((error) => {
			console.log('Error retrieving contentful data', error);
		});
};
