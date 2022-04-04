import { Collapse, Navbar, Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'tabler-icons-react';

function MainNavbar({
	collapse,
	setCollapse,
	opened,
}: {
	collapse: boolean;
	setCollapse: Function;
	opened: boolean;
}) {
	return (
		<Navbar
			p="md"
			hiddenBreakpoint="sm"
			hidden={!opened}
			width={{ sm: 200, lg: 300 }}
		>
			<Navbar.Section mt="lg" mb="lg">
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
