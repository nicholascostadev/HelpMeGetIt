import { ActionIcon, Box, Button, Header, Text } from '@mantine/core';
import styled from 'styled-components';
import LightDarkButton from '../../LightDarkButton';

function LandingNavbar() {
	return (
		<>
			<Header height={70}>
				<NavWrapper>
					<Text
						variant="gradient"
						gradient={{ from: 'red', to: 'blue' }}
						sx={{ fontSize: '2rem' }}
					>
						HelpMeGetIt
					</Text>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Button mr="md" size="sm">
							Login
						</Button>
						<ActionIcon>
							<LightDarkButton />
						</ActionIcon>
					</Box>
				</NavWrapper>
			</Header>
		</>
	);
}

const NavWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	justify-content: space-between;
	padding: 0 20%;
`;

export default LandingNavbar;
