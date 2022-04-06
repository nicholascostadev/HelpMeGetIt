import {
	Box,
	Button,
	Paper,
	PasswordInput,
	TextInput,
	Title,
	Progress,
	Text,
	Popover,
	MediaQuery,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	At,
	Check,
	Lock,
	Login as LoginIcon,
	User,
	UserCircle,
} from 'tabler-icons-react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { CheckIcon, Cross1Icon } from '@modulz/radix-icons';
import MainHeader from '../MainHeader';

function Register() {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);
	const [register, setRegister] = useState<{
		name: string;
		email: string;
		password: string;
	}>({
		name: '',
		email: '',
		password: '',
	});

	const requirements = [
		{ re: /[0-9]/, label: 'Includes number' },
		{ re: /[a-z]/, label: 'Includes lowercase letter' },
		{ re: /[A-Z]/, label: 'Includes uppercase letter' },
		{ re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
	];

	const [token, setToken] = useState<string | null>();
	const [popoverOpened, setPopoverOpened] = useState(false);

	const strength = getStrength(register.password);
	const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

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
				url: 'http://localhost:5004/api/register',
				data: register,
			}).then(response => {
				if (response.data.status === 'ok') {
					setLoading(false);
					setError(false);
					setSuccess(true);
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

	function PasswordRequirement({
		meets,
		label,
	}: {
		meets: boolean;
		label: string;
	}) {
		return (
			<Text
				color={meets ? 'teal' : 'red'}
				sx={{ display: 'flex', alignItems: 'center' }}
				mt={7}
				size="sm"
			>
				{meets ? <CheckIcon /> : <Cross1Icon />} <Box ml={10}>{label}</Box>
			</Text>
		);
	}

	const checks = requirements.map((requirement, index) => (
		<PasswordRequirement
			key={index}
			label={requirement.label}
			meets={requirement.re.test(register.password)}
		/>
	));

	function getStrength(password: string) {
		let multiplier = password.length > 5 ? 0 : 1;

		requirements.forEach(requirement => {
			if (!requirement.re.test(password)) {
				multiplier += 1;
			}
		});

		return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
	}

	return (
		<RegisterWrapper>
			<Paper>
				<Box
					sx={{
						padding: '2rem',
						borderRadius: '5px',
					}}
				>
					<MediaQuery smallerThan="sm" styles={{ minWidth: '400px ' }}>
						<MediaQuery
							smallerThan="xs"
							styles={{ minWidth: 'auto !important' }}
						>
							<RegisterForm onSubmit={handleSubmit}>
								<Title mb="2rem">Register</Title>
								<TextInput
									required
									label="Name"
									placeholder="Seu nome"
									type="text"
									size="lg"
									mb="1rem"
									icon={<UserCircle />}
									onChange={e =>
										setRegister({ ...register, name: e.target.value })
									}
									error={error}
								/>
								<TextInput
									required
									label="Email"
									placeholder="exemplo@email.com"
									type="email"
									size="lg"
									mb="1rem"
									icon={<At />}
									onChange={e =>
										setRegister({ ...register, email: e.target.value })
									}
									error={error}
								/>
								<Popover
									opened={popoverOpened}
									position="bottom"
									placement="start"
									withArrow
									sx={{ width: '100%' }}
									mb="2rem"
									trapFocus={false}
									transition="pop-top-left"
									onFocusCapture={() => setPopoverOpened(true)}
									onBlurCapture={() => setPopoverOpened(false)}
									target={
										<PasswordInput
											required
											label="Your password"
											size="lg"
											placeholder="Your password"
											value={register.password}
											onChange={e =>
												setRegister({
													...register,
													password: e.currentTarget.value,
												})
											}
										/>
									}
								>
									<Progress
										color={color}
										value={strength}
										size={5}
										style={{ marginBottom: 10 }}
									/>
									<PasswordRequirement
										label="Includes at least 6 characters"
										meets={register.password.length > 5}
									/>
									{checks}
								</Popover>
								<Button
									type="submit"
									onClick={handleSubmit}
									rightIcon={success ? <Check /> : <User />}
									loading={loading}
									loaderPosition="right"
									color={success ? 'green' : 'blue'}
									size="md"
									fullWidth
									disabled={color === 'teal' ? false : true}
								>
									Registrar
								</Button>
								<Text mt="md" variant="link" component={Link} to="/login">
									Já tem uma conta?
								</Text>
							</RegisterForm>
						</MediaQuery>
					</MediaQuery>
				</Box>
			</Paper>
		</RegisterWrapper>
	);
}
const RegisterWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

const RegisterForm = styled.form`
	min-width: 500px;
`;

export default Register;
