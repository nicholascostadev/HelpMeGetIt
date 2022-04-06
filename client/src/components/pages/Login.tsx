import {
	Box,
	Button,
	MediaQuery,
	Paper,
	PasswordInput,
	Text,
	TextInput,
	Title,
	useMantineColorScheme,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { At, Lock, Login as LoginIcon } from 'tabler-icons-react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [login, setLogin] = useState<{ email: string; password: string }>({
		email: '',
		password: '',
	});
	const [token, setToken] = useState<string | null>();
	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === 'dark';

	let navigate = useNavigate();

	useEffect(() => {
		const _token = localStorage.getItem('token');
		setToken(_token);

		if (token) {
			navigate('/home');
		} else {
			return;
		}
	}, [token, navigate]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setLoading(true);

		try {
			await axios({
				method: 'POST',
				url: 'http://localhost:5004/api/login',
				data: login,
			}).then(response => {
				if (response.data.status === 'ok') {
					setLoading(false);
					setError(false);
					localStorage.setItem('token', response.data.token);
					setToken(localStorage.getItem('token'));
				} else {
					setLoading(false);
					setError(true);
					alert(response.data.error);
				}
			});
		} catch (err) {
			setError(true);
			alert(err);
		}

		setLoading(false);
	};

	return (
		<LoginWrapper>
			<Paper>
				<Box sx={{ padding: '2rem', borderRadius: '5px' }}>
					<MediaQuery smallerThan="sm" styles={{ minWidth: '400px ' }}>
						<MediaQuery
							smallerThan="xs"
							styles={{ minWidth: 'auto !important' }}
						>
							<LoginForm onSubmit={handleSubmit}>
								<Title mb="2rem">Login</Title>
								<TextInput
									required
									label="Email"
									placeholder="example@mail.com"
									type="text"
									size="lg"
									mb="1rem"
									icon={<At />}
									onChange={e => setLogin({ ...login, email: e.target.value })}
									error={error}
								/>
								<PasswordInput
									required
									label="Password"
									icon={<Lock />}
									onChange={e =>
										setLogin({ ...login, password: e.target.value })
									}
									size="lg"
									mb="2rem"
									error={error}
								/>
								<Button
									type="submit"
									onClick={handleSubmit}
									rightIcon={<LoginIcon />}
									loading={loading}
									loaderPosition="right"
									size="md"
									fullWidth
								>
									Login
								</Button>
								<Text mt="md" variant="link" component={Link} to="/register">
									Não possui uma conta?
								</Text>
							</LoginForm>
						</MediaQuery>
					</MediaQuery>
				</Box>
			</Paper>
		</LoginWrapper>
	);
}
const LoginWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const LoginForm = styled.form`
	min-width: 500px;
`;

export default Login;
