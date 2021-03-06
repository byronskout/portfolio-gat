import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';


export default function() {
	const query = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<footer className="footer">
			<div className="container">
				<div className="logo" />
				<div className="navlinks text-secondary" />
				<div className="navlinks text-secondary" style={{ marginTop: '20px' }} />
				<p className="text-primary f-d">
					Copyright &copy; {query.site.siteMetadata.title} {new Date().getFullYear()}
				</p>
			</div>
		</footer>
	);
}
