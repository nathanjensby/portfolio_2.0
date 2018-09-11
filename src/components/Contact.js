import React, { Component } from 'react';
import styled from 'styled-components';
import contactBackground from '../img/contactbackground.jpg';

export default class Contact extends Component {
	render() {
		return (
			<ContactWrapper>
				<ImageWrapper>
					<img src={contactBackground} />
				</ImageWrapper>
			</ContactWrapper>
		)
	}
};

const ContactWrapper = styled.main`

`;

const ImageWrapper = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	max-width: 100vw;
	overflow: hidden;
	z-index: 0;
	img {
		height: 100vh;
	}
`;
