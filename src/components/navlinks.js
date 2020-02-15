import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Link from './link';
import { Location } from '@reach/router';
import { Sun, Moon } from './icons';

function ListItem(props) {
	const data = props.data;
	let anchorAttrs = {
		href: data.url,
		title: data.name
	};
	return (
		<Location>
			{({ location }) => {
				return (
					<li>
						<Link
							to={data.url}
							{...anchorAttrs}
							className={'/' + location.pathname.split('/')[1] === data.url ? 'active' : ''}
						>
							<span>{data.name}</span>
						</Link>
					</li>
				);
			}}
		</Location>
	);
}

class ThemeSwitchButton extends React.Component {
	state = {
		darkMode: this.props.darkmode
	};

	componentDidMount() {
		const _this = this;
		let darkMode = localStorage.getItem('darkMode');

		document.body.className = _this.state.darkMode ? 'dark-mode' : '';
		if (darkMode) {
			this.setState(
				{
					darkMode: darkMode === 'true'
				},
				() => {
					document.body.className = _this.state.darkMode ? 'dark-mode' : '';
				}
			);
    }
  }
    
	render() {
		return (
			<React.Fragment>
				<li className="switch-theme">
					<div className="switch-button" ref={(c) => (this.switchBtn = c)}>
						<div
							title="Switch to Dark Mode"
							data-switch-to="dark"
							className={!this.state.darkMode ? 'active' : ''}
						>
							<Sun />
						</div>
						<div
							title="Switch to Light Mode"
							data-switch-to="light"
							className={this.state.darkMode ? 'active' : ''}
						>
							<Moon />
						</div>
					</div>
				</li>
			</React.Fragment>
		);
	}
}
