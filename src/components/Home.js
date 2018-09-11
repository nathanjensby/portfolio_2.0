import React, { Component } from 'react';
import styled from 'styled-components';
import jumbotron from '../img/jumbotron3.jpg';

export default class Home extends Component {
	render() {
		return (
			<HomeWrapper>
				<ImgWrapper>
					<img src={jumbotron} />
				</ImgWrapper>
				<HeaderWrapper>
					<h1>Front End Developer</h1>
					<h1>Nathan Jensby</h1>
				</HeaderWrapper>
			</HomeWrapper>
		)
	}
};

const HomeWrapper = styled.main`
`;

const ImgWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	img {
		max-height: 100vh;
		width: 100%;
	}
`;

const HeaderWrapper = styled.header`
	color: white;
	display: flex;
	flex-direction: column;
	position: relative;
	margin-top: 20%;
	z-index: 1;
`;
