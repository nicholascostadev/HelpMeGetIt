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
						? `Change to light mode [Ctrl + J or ⌘ + J]`
						: 'Change to dark mode  [Ctrl + J or ⌘ + J]'
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
