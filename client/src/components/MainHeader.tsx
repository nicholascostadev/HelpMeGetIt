import {
	Avatar,
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
		<MediaQuery smallerThan="sm" styles={{ padding: '1rem 8%' }}>
			<Header height={80} p="1rem 20%">
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

					<HeaderItemsWrapper>
						{token && (
							<>
								<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
									<Button size="sm" mx="sm" onClick={logout}>
										Logout
									</Button>
								</MediaQuery>
								<MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
									<Avatar
										mx="lg"
										src={null}
										color="blue"
										radius="xl"
										component={Link}
										to="/home"
									/>
								</MediaQuery>
							</>
						)}
						<LightDarkButton />
					</HeaderItemsWrapper>
				</div>
			</Header>
		</MediaQuery>
	);
}

const HeaderItemsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default MainHeader;
