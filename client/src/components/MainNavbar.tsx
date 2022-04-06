import {
	Avatar,
	Box,
	Button,
	Collapse,
	MediaQuery,
	Navbar,
	Text,
} from '@mantine/core';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'tabler-icons-react';

function MainNavbar({
	collapse,
	setCollapse,
	opened,
	setOpened,
}: {
	collapse: boolean;
	setCollapse: Function;
	opened: boolean;
	setOpened: Function;
}) {
	let navigate = useNavigate();
	const logout = () => {
		localStorage.removeItem('token');
		navigate('/login');
	};

	return (
		<Navbar
			p="md"
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ sm: 200, lg: 300 }}
		>
			<Navbar.Section my="lg" sx={{ display: 'none' }}>
				<MediaQuery
					smallerThan="sm"
					styles={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignContent: 'center',
					}}
				>
					<Box sx={{ display: 'none' }}>
						<Avatar
							mx="lg"
							my="md"
							size="lg"
							src={null}
							color="blue"
							radius="xl"
							component={Link}
							to="/home"
							sx={{ alignSelf: 'center' }}
						/>
						<Button
							size="sm"
							mx="sm"
							onClick={logout}
							sx={{ width: '200px', alignSelf: 'center' }}
						>
							Logout
						</Button>
					</Box>
				</MediaQuery>
			</Navbar.Section>
			<Navbar.Section my="lg">
				{collapse ? (
					<Text style={{ display: 'flex', alignItems: 'center' }} size="lg">
						Subjects
						<ChevronDown
							onClick={() => setCollapse((o: boolean) => !o)}
							cursor="pointer"
						/>
					</Text>
				) : (
					<Text style={{ display: 'flex', alignItems: 'center' }} size="lg">
						Subjects
						<ChevronRight
							onClick={() => setCollapse((o: boolean) => !o)}
							cursor="pointer"
						/>
					</Text>
				)}

				<Collapse
					in={collapse}
					transitionTimingFunction="linear"
					transitionDuration={150}
				>
					<Text onClick={() => setOpened((o: boolean) => !o)}>
						<Text component={Link} to="/about" variant="link">
							Example
						</Text>
					</Text>
					<Text onClick={() => setOpened((o: boolean) => !o)}>
						<Text component={Link} to="/calendarPage" variant="link">
							calendarPage
						</Text>
					</Text>
					<Text onClick={() => setOpened((o: boolean) => !o)}>
						<Text component={Link} to="/notificationComponent" variant="link">
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
	);
}

export default MainNavbar;
