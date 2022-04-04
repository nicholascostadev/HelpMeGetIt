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
import { Link } from 'react-router-dom';
import MainHeader from '../MainHeader';
import MainNavbar from '../MainNavbar';

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
					<MainNavbar
						collapse={collapse}
						setCollapse={setCollapse}
						opened={opened}
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
