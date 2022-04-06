import React, { useEffect, useState } from 'react';
import {
	AppShell,
	Navbar,
	Header,
	Footer,
	Aside,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
	useMantineColorScheme,
	Collapse,
	ScrollArea,
} from '@mantine/core';
import LightDarkButton from './LightDarkButton';
import { ChevronDown, ChevronRight } from 'tabler-icons-react';
import postsList from './testPosts/posts.json';
import Markdown from './Markdown';
import { Link } from 'react-router-dom';
import MainNavbar from './MainNavbar';
import MainHeader from './MainHeader';

function AppShellComponent() {
	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === 'dark';
	const [opened, setOpened] = useState(false);
	const theme = useMantineTheme();
	const [collapse, setCollapse] = useState(false);
	const [fileName, setFileName] = useState('');
	const [post, setPost] = useState('');

	useEffect(() => {
		let times = [];

		for (let i = 0; i < postsList.length; i++) {
			let date = new Date(postsList[i]?.date).getTime();
			times.push(date);
		}

		let latest = Math.max.apply(null, times);

		for (let i = 0; i < postsList.length; i++) {
			let date = new Date(postsList[i]?.date).getTime();
			if (latest === date) {
				setFileName(postsList[i].fileName);
			}
		}

		if (fileName) {
			import(`./testPosts/${fileName}.mdx`).then(res => {
				fetch(res.default)
					.then(res => res.text())
					.then(res => setPost(res));
			});
		}
	}, [fileName]);

	return (
		<div>
			<AppShell
				styles={{
					main: {
						background:
							theme.colorScheme === 'dark'
								? theme.colors.dark[8]
								: theme.colors.gray[0],
					},
				}}
				navbarOffsetBreakpoint="sm"
				asideOffsetBreakpoint="lg"
				fixed
				navbar={
					<MainNavbar
						opened={opened}
						setOpened={setOpened}
						collapse={collapse}
						setCollapse={setCollapse}
					/>
				}
				aside={
					<MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
						<Aside p="md" hiddenBreakpoint="md" width={{ sm: 200, lg: 300 }}>
							<Text>Application sidebar</Text>
						</Aside>
					</MediaQuery>
				}
				footer={
					<Footer height={60} p="md">
						Application footer
					</Footer>
				}
				header={<MainHeader opened={opened} setOpened={setOpened} />}
			>
				<Markdown post={post} />
			</AppShell>
		</div>
	);
}

export default AppShellComponent;
