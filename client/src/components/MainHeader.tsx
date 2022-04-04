import {
	Burger,
	Button,
	Header,
	MediaQuery,
	Text,
	useMantineColorScheme,
	useMantineTheme,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LightDarkButton from './LightDarkButton';
import jwt_decode from 'jwt-decode';
import styled from 'styled-components';

function MainHeader({
	opened,
	setOpened,
}: {
	opened: boolean;
	setOpened: Function;
}) {
	const [user, setUser] = useState<{}>();

	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === 'dark';
	const theme = useMantineTheme();

	const [token, setToken] = useState<string | null>();

	let navigate = useNavigate();

	useEffect(() => {
		const _token = localStorage.getItem('token');

		setToken(_token);

		if (token === null) {
			navigate('/login');
		} else if (token) {
			return;
		}
	}, [token, navigate]);

	const logout = () => {
		localStorage.removeItem('token');
		navigate('/login');
	};

	return (
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
						onClick={() => setOpened((o: boolean) => !o)}
						size="sm"
						color={theme.colors.gray[6]}
						mr="xl"
					/>
				</MediaQuery>

				<Text
					component={Link}
					to="/"
					style={{
						fontSize: '1.5rem',
						fontFamily: "'Roboto', serif",
					}}
					variant="gradient"
					gradient={{ from: 'red', to: 'blue' }}
					weight="bold"
				>
					HelpMeGetIt
				</Text>

				<HeaderItemsWrapper>
					{token && (
						<MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
							<Button size="md" onClick={logout}>
								Logout
							</Button>
						</MediaQuery>
					)}
					<LightDarkButton />
				</HeaderItemsWrapper>
			</div>
		</Header>
	);
}

const HeaderItemsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default MainHeader;
