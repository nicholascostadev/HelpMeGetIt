import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { MarkdownWrapper } from './styles';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
	vscDarkPlus,
	vs,
	prism,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useMantineColorScheme } from '@mantine/core';

function Markdown({ post }: { post: string }): JSX.Element {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === 'dark';

	return (
		<MarkdownWrapper>
			<ReactMarkdown
				children={post}
				className="markdown"
				remarkPlugins={[remarkGfm]}
				components={{
					code({ node, inline, className, children, ...props }) {
						const match = /language-(\w+)/.exec(className || '');
						return !inline && match ? (
							<SyntaxHighlighter
								children={String(children).replace(/\n$/, '')}
								style={dark ? vscDarkPlus : prism}
								language={match[1]}
								PreTag="div"
								{...props}
							/>
						) : (
							<code className={className} {...props}>
								{children}
							</code>
						);
					},
				}}
			/>
		</MarkdownWrapper>
	);
}

export default Markdown;
