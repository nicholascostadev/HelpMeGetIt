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
import LightDarkButton from '../LightDarkButton';
import styled from 'styled-components';
import { BrandGithub, Map } from 'tabler-icons-react';
import explorerImage from '../../assets/explorer.svg';
import frame1 from '../../assets/frame-1.svg';

function LandingPage() {
	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === 'dark';
	const [opened, setOpened] = useState(false);
	const theme = useMantineTheme();
	const [collapse, setCollapse] = useState(false);

	return (
		<Landing>
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
						<Button mr="md">Login</Button>
						<ActionIcon>
							<LightDarkButton />
						</ActionIcon>
					</Box>
				</NavWrapper>
			</Header>
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
									styles={{ fontSize: '1rem', textAlign: 'center' }}
								>
									<Text sx={{ fontSize: '1.5rem' }}>
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
								height={450}
								width={450}
								src={undefined}
								alt="With default placeholder"
								withPlaceholder
							></Image>
						</Grid.Col>
					</Grid>
				</MediaQuery>
			</Welcoming>
			<Image src={frame1} mb="5rem" />
			<Grid align="center" justify="center">
				<MediaQuery smallerThan="md" styles={{ fontSize: '1.5rem' }}>
					<Title
						align="center"
						mb="10rem"
						sx={{ fontSize: '3rem', width: '80%' }}
					>
						Explore diferentes explicações para o mesmo assunto
					</Title>
				</MediaQuery>
			</Grid>
			<Grid p="0 20%" align="center" justify="center">
				<Grid.Col lg={6} sm={12}>
					<Image src={explorerImage} />
				</Grid.Col>
				<Grid.Col lg={6} sm={12}>
					<Text size="xl">
						Encontre o caminho para o aprendizado de programação
					</Text>
				</Grid.Col>
			</Grid>
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

const NavWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	justify-content: space-between;
	padding: 0 20%;
`;

const Welcoming = styled.div`
	height: calc(100vh - 70px);
`;

const StyledFooter = styled(Footer)`
	position: static;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20%;
`;

export default LandingPage;
