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
	Title,
	Paper,
	Box,
} from '@mantine/core';
import LightDarkButton from '../LightDarkButton';
import { ChevronDown, ChevronRight } from 'tabler-icons-react';
import postsList from '../testPosts/posts.json';
import Markdown from '../Markdown';
import { Link } from 'react-router-dom';

function AppShellComponent() {
	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === 'dark';
	const [opened, setOpened] = useState(false);
	const theme = useMantineTheme();
	const [collapse, setCollapse] = useState(false);

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
					<Navbar
						p="md"
						hiddenBreakpoint="sm"
						hidden={!opened}
						width={{ sm: 200, lg: 300 }}
					>
						<Navbar.Section mt="lg" mb="lg">
							{collapse ? (
								<Text
									style={{ display: 'flex', alignItems: 'center' }}
									size="lg"
								>
									Subjects
									<ChevronDown
										onClick={() => setCollapse(o => !o)}
										cursor="pointer"
									/>
								</Text>
							) : (
								<Text
									style={{ display: 'flex', alignItems: 'center' }}
									size="lg"
								>
									Subjects
									<ChevronRight
										onClick={() => setCollapse(o => !o)}
										cursor="pointer"
									/>
								</Text>
							)}

							<Collapse
								in={collapse}
								transitionTimingFunction="linear"
								transitionDuration={150}
							>
								<Text>
									<Text component={Link} to="/about" variant="link">
										Example
									</Text>
								</Text>
								<Text>
									<Text component={Link} to="/calendarPage" variant="link">
										calendarPage
									</Text>
								</Text>
								<Text>
									<Text
										component={Link}
										to="/notificationComponent"
										variant="link"
									>
										Notification Component
									</Text>
								</Text>
							</Collapse>
						</Navbar.Section>
						<Navbar.Section grow>
							<Text size="lg">Summaries</Text>
						</Navbar.Section>
						<Navbar.Section grow mt="sm">
							<Text size="lg">Summary</Text>
						</Navbar.Section>
						<Navbar.Section>
							<Text>Footer</Text>
						</Navbar.Section>
					</Navbar>
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
				header={
					<Header height={70} p="md">
						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
								<Burger
									opened={opened}
									onClick={() => setOpened(o => !o)}
									size="sm"
									color={theme.colors.gray[6]}
									mr="xl"
								/>
							</MediaQuery>

							<Text
								component={Link}
								to="/home"
								style={{
									fontSize: '2rem',
									fontFamily: "'Roboto', serif",
								}}
								variant="gradient"
								gradient={{ from: 'red', to: 'blue' }}
								weight="bold"
							>
								HelpMeGetIt
							</Text>
							<LightDarkButton />
						</div>
					</Header>
				}
			>
				<Paper m="0 15%" p="0 5%">
					<Title>
						Seja bem vindo ao
						<Text
							variant="gradient"
							gradient={{ from: 'red', to: 'blue' }}
							inherit
							component="span"
							m={'0 5px'}
						>
							HelpMeGetIt
						</Text>
						, para navegar pelo site basta usar a aba de navegação ao lado
						esquerdo.
					</Title>
				</Paper>
			</AppShell>
		</div>
	);
}

export default AppShellComponent;
