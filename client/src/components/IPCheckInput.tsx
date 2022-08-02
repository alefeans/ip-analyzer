import { isIP } from 'is-ip'
import React, { FormEvent, useState } from 'react';
import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import IPCheckResultTable from './IPCheckResultTable';

export type IPCheckResult = {
	ip_version: 4 | 6,
	is_public: boolean,
	country: string,
	reports: number,
	isp: string,
	usage_type: string,
	domain: string,
	risk_score: number,
}

export default function IPCheckInput() {

	const toast = useToast({ duration: 2000, isClosable: true });
	const [input, setInput] = useState<string>('');
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [result, setResult] = useState<IPCheckResult>({
		ip_version: 4,
		is_public: false,
		country: '',
		reports: 0,
		isp: '',
		usage_type: '',
		domain: '',
		risk_score: 0,
	})

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		if (!isIP(input)) {
			toast({
				title: 'Invalid IPV4 Address',
				status: 'error'
			})
			setIsOpen(false)
			return
		}
		// TODO: Public IP check

		toast({
			title: 'Checking IP Address',
			status: 'loading',
		})

		// Mocked API response
		setResult({
			ip_version: 4,
			is_public: true,
			country: 'China',
			reports: 10,
			isp: 'Tencent Cloud Computing (Beijing) Co. Ltd',
			usage_type: 'Data Center/Web Hosting/Transit',
			domain: 'tencent.com',
			risk_score: 90,
		})
		setIsOpen(true)
		return
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<HStack mt='3'>
					<Input
						placeholder='0.0.0.0 or IPV6'
						value={input}
						onChange={e => setInput(e.target.value)}
					/>
					<Button colorScheme='teal' px='4' type='submit'>
						Check
					</Button>
				</HStack>
			</form>
			<IPCheckResultTable result={result} isOpen={isOpen} />
		</>
	);
}
