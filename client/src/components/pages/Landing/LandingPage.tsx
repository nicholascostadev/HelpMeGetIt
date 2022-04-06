import {
	ActionIcon,
	Box,
	Button,
	Footer,
	Grid,
	Header,
	Image,
	MediaQuery,
	Text,
	Title,
	useMantineColorScheme,
	useMantineTheme,
} from '@mantine/core';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BrandGithub, Map, Users } from 'tabler-icons-react';
import explorerImage from '../../../assets/explorer.svg';
import frame1 from '../../../assets/frame-1.svg';
import communityImage from '../../../assets/community.svg';
import LandingNavbar from './LandingNavbar';

function LandingPage() {
	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === 'dark';
	const [opened, setOpened] = useState(false);
	const theme = useMantineTheme();
	const [collapse, setCollapse] = useState(false);

	return (
		<Landing>
			<LandingNavbar />
			<Welcoming>
				<MediaQuery smallerThan="md" styles={{ justifyContent: 'center' }}>
					<Grid
						align="center"
						p="0 20%"
						m="0"
						sx={{ overflow: 'hidden', height: '100%' }}
					>
						<MediaQuery
							smallerThan="sm"
							styles={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								padding: '0',
							}}
						>
							<Grid.Col lg={6} sm={12} pl="0">
								<MediaQuery
									smallerThan="lg"
									styles={{ fontSize: '1.2rem', textAlign: 'center' }}
								>
									<Text sx={{ fontSize: '2rem' }}>
										Lorem, ipsum dolor sit amet consectetur adipisicing elit.
										Inventore doloribus, totam doloremque quo quam distinctio
										ducimus? Ducimus, possimus error. Ipsa possimus in
										blanditiis earum accusamus iure minus. Fuga, blanditiis
										esse.
									</Text>
								</MediaQuery>
								<MediaQuery
									smallerThan="md"
									styles={{ alignSelf: 'center', justifySelf: 'center' }}
								>
									<Button
										component={Link}
										to="/home"
										leftIcon={<Map />}
										mt="xl"
										size="lg"
									>
										Explorar
									</Button>
								</MediaQuery>
							</Grid.Col>
						</MediaQuery>
						<Grid.Col lg={6} sm={12} pr="0">
							<Image
								height={600}
								width={600}
								src={undefined}
								alt="With default placeholder"
								withPlaceholder
							></Image>
						</Grid.Col>
					</Grid>
				</MediaQuery>
			</Welcoming>
			<Image src={frame1} mb="5rem" />
			<Box className="about" sx={{ minHeight: '100vh' }}>
				<Grid align="center" justify="center" m="0">
					<MediaQuery smallerThan="sm" styles={{ fontSize: '2rem' }}>
						<Title
							align="center"
							mb="10rem"
							sx={{ fontSize: '3rem', width: '80%' }}
							mt="5rem"
						>
							Explore diferentes explicações para o mesmo assunto
						</Title>
					</MediaQuery>
				</Grid>
				<Grid grow p="0 20%" m="0" justify="center">
					<Grid.Col md={6} sm={12}>
						<Image src={explorerImage} />
					</Grid.Col>
					<Grid.Col md={6} sm={12}>
						<MediaQuery smallerThan="lg" styles={{ fontSize: '1.5rem' }}>
							<MediaQuery
								smallerThan="sm"
								styles={{ fontSize: '1.2rem', textAlign: 'center' }}
							>
								<Text sx={{ fontSize: '2rem' }}>
									Aqui você encontra uma nova maneira de aprender a programar.
									Chega de assistir 10 vídeos sobre o mesmo assunto, a melhor
									maneira pra aprender a programar e encontrar resumos para
									conceitos complexos de programação está aqui.
								</Text>
							</MediaQuery>
						</MediaQuery>
					</Grid.Col>
				</Grid>
			</Box>
			<Box className="cta" sx={{ height: '100vh', marginBottom: '2.5rem' }}>
				<Grid align="center" justify="center" m="0">
					<MediaQuery smallerThan="sm" styles={{ fontSize: '2rem' }}>
						<Title
							align="center"
							mt="5rem"
							mb="5rem"
							sx={{ fontSize: '3rem', width: '80%' }}
						>
							A comunidade está esperando por você.
						</Title>
					</MediaQuery>
				</Grid>
				<MediaQuery
					smallerThan="md"
					styles={{ justifyContent: 'center', alignContent: 'center' }}
				>
					<Grid p="0 20%" m="0" justify="center">
						<MediaQuery
							smallerThan="md"
							styles={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignContent: 'center',
							}}
						>
							<Grid.Col lg={6} sm={12}>
								<MediaQuery
									smallerThan="sm"
									styles={{
										textAlign: 'center',
										fontSize: '1.5rem',
									}}
								>
									<Text sx={{ fontSize: '2rem' }}>
										Entre para a comunidade, encontre resumos e respostas para
										assuntos importantes do mundo da programação ou ajude outras
										pessoas.
										<MediaQuery
											smallerThan="sm"
											styles={{ fontSize: '1.5rem' }}
										>
											<Text
												variant="gradient"
												component="span"
												gradient={{ from: 'red', to: 'blue' }}
												sx={{ fontSize: '2rem' }}
											>
												Venha se conectar!
											</Text>
										</MediaQuery>
									</Text>
								</MediaQuery>
								<MediaQuery
									smallerThan="md"
									styles={{ justifySelf: 'start', alignSelf: 'center' }}
								>
									<Button mt="xl" size="lg" leftIcon={<Users />}>
										<Text component={Link} to="/feed">
											Conectar
										</Text>
									</Button>
								</MediaQuery>
							</Grid.Col>
						</MediaQuery>
						<Grid.Col lg={6} sm={12}>
							<Image src={communityImage} />
						</Grid.Col>
					</Grid>
				</MediaQuery>
			</Box>
			{/* Footer */}
			<StyledFooter height={50}>
				<Text
					component="a"
					href="https://github.com/nicholascostadev"
					target="_blank"
					variant="link"
					sx={{ display: 'flex', alignItems: 'center' }}
					size="md"
				>
					<BrandGithub /> @nicholascostadev(Developer)
				</Text>
			</StyledFooter>
		</Landing>
	);
}

const Landing = styled.div`
	min-height: 100vh;
`;

const Welcoming = styled.div`
	height: calc(100vh - 70px);
	margin: 5rem 0;
`;

const StyledFooter = styled(Footer)`
	position: static;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20%;
`;

export default LandingPage;
