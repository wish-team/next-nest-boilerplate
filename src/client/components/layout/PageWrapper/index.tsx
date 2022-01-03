import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

// import Header from 'components/Layout/Header';
// import Container from 'components/Layout/Container';
// import Button from 'components/Button';

// Styles
const Root = styled.div`
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
	.top-bar {
		background-color: #FF8300;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		font-weight: 700;
		@media screen and (max-width: 800px) {
			height: 80px;
		}
		.content {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		button {
			min-width: 140px;
		}
	}
`;

// Components
const PageWrapper = ({ children }) => (
	<Root>
		<div className="content">
			{children}
		</div>
	</Root>
);

// Props
PageWrapper.propTypes = {
	children: PropTypes.node,
};

PageWrapper.defaultProps = {
	children: null,
};

export default PageWrapper;