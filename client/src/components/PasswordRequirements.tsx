import { useState } from 'react';
import { CheckIcon, Cross1Icon } from '@modulz/radix-icons';
import { PasswordInput, Progress, Text, Popover, Box } from '@mantine/core';
import { Lock } from 'tabler-icons-react';

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

const requirements = [
	{ re: /[0-9]/, label: 'Possui números' },
	{ re: /[a-z]/, label: 'Possui letras minúsculas' },
	{ re: /[A-Z]/, label: 'Possui letras maiúsculas' },
	{ re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Possui caracteres especiais' },
];

function getStrength(password: string) {
	let multiplier = password.length > 5 ? 0 : 1;

	requirements.forEach(requirement => {
		if (!requirement.re.test(password)) {
			multiplier += 1;
		}
	});

	return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

export function PasswordStrength() {
	const [popoverOpened, setPopoverOpened] = useState(false);
	const [value, setValue] = useState('');
	const checks = requirements.map((requirement, index) => (
		<PasswordRequirement
			key={index}
			label={requirement.label}
			meets={requirement.re.test(value)}
		/>
	));

	const strength = getStrength(value);
	const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

	return (
		<Popover
			opened={popoverOpened}
			position="bottom"
			placement="start"
			sx={{ width: '100%' }}
			withArrow
			styles={{ popover: { width: '100%' } }}
			trapFocus={false}
			transition="pop-top-left"
			onFocusCapture={() => setPopoverOpened(true)}
			onBlurCapture={() => setPopoverOpened(false)}
			target={
				<PasswordInput
					required
					label="Your password"
					placeholder="Your password"
					value={value}
					size="lg"
					icon={<Lock />}
					mb="2rem"
					onChange={event => setValue(event.currentTarget.value)}
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
				label="Possui pelo menos 6 caracteres"
				meets={value.length > 5}
			/>
			{checks}
		</Popover>
	);
}
