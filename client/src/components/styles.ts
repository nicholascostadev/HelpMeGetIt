import styled from 'styled-components';

export const MarkdownWrapper = styled.div`
	min-width: 800px;
	overflow-x: hidden;
	margin: 0 20%;
	@media (max-width: 1450px) {
		min-width: auto;
		width: 100%;
		margin: 0;
	}

	> .markdown {
		border-radius: 15px;
		margin: 1rem;
		display: flex;
		flex-direction: column;

		* {
			line-height: 1.5;
		}

		> hr {
			margin: 3rem 0;
		}

		> h1 {
			font-size: 3rem;
		}

		> h2 {
			font-size: 2.5rem;
		}

		> h3 {
			font-size: 2rem;
		}

		> h4 {
			font-size: 1.5rem;
		}

		> h5 {
			font-size: 1rem;
		}

		> li {
			margin: 1rem 0;
		}

		> ul > * {
			font-size: 1.1rem;
		}

		> p {
			font-size: 1.25rem;
			word-wrap: break-word;
		}

		a {
			text-decoration: underline;
		}

		> p > img {
			width: 100%;
			justify-self: center;
			border-radius: 0.5rem 0.5rem 0 0;
		}

		li > ul {
			margin: 0.5rem 0;
		}

		> pre > div {
			border-radius: 5px;
		}

		> pre > div > code > span {
			font-family: 'Fira Code', monospace;
			font-size: 1rem;
		}

		> blockquote {
			border-left: 3px solid #282a36;
			height: auto;
			padding: 0 0.5rem;
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}

		> blockquote > p {
			font-size: 1.25rem;
		}

		> p > code {
			font-family: 'Fira Code', monospace;
			background-color: #282a36;
			border-radius: 5px;
			padding: 0.2rem;
		}

		> div > h1 {
			margin-left: 0.5rem;
		}
	}
	> p {
		margin-left: 2rem;
	}

	> h1 {
		margin-left: 2rem;
	}
	> .markdown {
		margin: 0;

		margin: 0;
		> hr {
			margin: 3rem 0;
		}

		> h1 {
			font-size: 2rem;
		}

		> h2 {
			font-size: 1.5rem;
		}

		> h3 {
			font-size: 1.15rem;
		}

		> h4 {
			font-size: 1rem;
		}

		> h5 {
			font-size: 0.5rem;
		}

		> li {
			margin: 1rem 0;
		}

		> ul > * {
			font-size: 1.1rem;
		}

		> p {
			font-size: 1rem;
			word-wrap: break-word;
		}

		a {
			text-decoration: underline;
		}

		> p > img {
			max-width: 100%;
		}

		li > ul {
			margin: 0.5rem 0;
		}

		> pre > div > code > span {
			font-family: 'Fira Code', monospace;
			font-size: 1rem;
		}

		> blockquote {
			border-left: 3px solid #282a36;
			height: auto;
			padding: 0 0.5rem;
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}

		> blockquote > p {
			font-size: 1.25rem;
		}

		> p > code {
			font-family: 'Fira Code', monospace;
			background-color: #282a36;
			border-radius: 5px;
			padding: 0.2rem;
		}

		> div > h1 {
			margin-left: 0.5rem;
		}
	}

	> p {
		margin-left: 1rem;
	}

	> h1 {
		margin-left: 1rem;
	}
`;
