import {
	ActionIcon,
	Text,
	Tooltip,
	useMantineColorScheme,
} from '@mantine/core';
import { MoonStars, Sun } from 'tabler-icons-react';

function LightDarkButton() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();
	const dark = colorScheme === 'dark';

	return (
		<div>
			<Tooltip
				label={
					dark
						? `Mudar para modo claro [Ctrl + J ou ⌘ + J]`
						: 'Mudar para modo escuro  [Ctrl + J ou ⌘ + J]'
				}
				withArrow
			>
				<ActionIcon
					variant="transparent"
					color={dark ? 'yellow' : 'blue'}
					onClick={() => toggleColorScheme()}
				>
					{dark ? <Sun size={18} /> : <MoonStars size={18} />}
				</ActionIcon>
			</Tooltip>
		</div>
	);
}

export default LightDarkButton;
