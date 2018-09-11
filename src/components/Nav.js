import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Nav extends Component {
	render() {
		return(
			<NavWrapper>
				<NavButton>
					<Link to='/'>Home</Link>
				</NavButton>
				<NavButton>
					<Link to='/about'>About</Link>
				</NavButton>
				<NavButton>
					<Link to='/contact'>Contact</Link>
				</NavButton>
			</NavWrapper>
		)
	}
}

const NavWrapper = styled.nav`
	background-color: black;
	display: flex;
	flex-direction: row;
	padding: 15px;
	position: relative;
	top: 0;
	z-index: 1000;
`;

const NavButton = styled.div`
	margin: 0 15px;
	position: relative;

	&::after {
		bottom: -2px;
		content: '';
		background: white;
		display: inline-block;
		height: 3px;
		left: 50%;
		position: absolute;
		transition: all 300ms ease;
		width: 0;
	}

	&:hover {
		&::after {
			width: 100%;
			left: 0;
		}
	}

	a {
		color: white;
		text-decoration: none;
	}
`;
