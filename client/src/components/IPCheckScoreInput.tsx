import React, { FormEvent, useState } from 'react'
import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import { gql } from "graphql-request"
import { isIP } from 'is-ip'
import is_ip_private from 'private-ip'
import IPCheckScoreTable from './IPCheckScoreTable'
import { IPCheckScore } from './shared/types/IPCheckScore'
import { IPAnalyzerClient } from '../services/IPAnalyzerClient'

const IP_CHECK_SCORE_QUERY = gql`
	query($ip: String!) {
	 score(ip: $ip) {
     ip
     ipVersion
     isPublic
     country
     reports
     isp
     usageType
     domain
     riskScore
   }
}`

type IPCheckScoreResponse = {
	score: IPCheckScore
}

export default function IPCheckScoreInput() {

	const toast = useToast({ duration: 2000, isClosable: true })
	const [input, setInput] = useState<string>('')
	const [previousInput, setPreviousInput] = useState<string>('')
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [score, setScore] = useState<IPCheckScore>({
		ip: '',
		ipVersion: 4,
		isPublic: false,
		country: '',
		reports: 0,
		isp: '',
		usageType: '',
		domain: '',
		riskScore: 0
	})

	async function handleSubmitIP(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()

		if (!isIP(input)) {
			toast({ title: 'Invalid IP Address', status: 'error' })
			return
		}

		if (is_ip_private(input)) {
			toast({ title: 'Private IP Address', status: 'warning' })
			return
		}

		if (previousInput === input) {
			return
		}

		try {
			toast({ title: 'Checking IP Address', status: 'loading' })
			const { score } = await IPAnalyzerClient.request<IPCheckScoreResponse>(IP_CHECK_SCORE_QUERY, { ip: input })
			setPreviousInput(input)
			setScore(score)
			setIsOpen(true)
			toast.closeAll()
		} catch (error) {
			toast.closeAll()
			toast({ title: 'Sorry, try again later', status: 'error' })
		}
	}

	return (
		<>
			<form onSubmit={handleSubmitIP}>
				<HStack mt='4'>
					<Input
						placeholder='Public IPV4 or IPV6'
						value={input}
						onChange={e => setInput(e.target.value)}
					/>
					<Button colorScheme='teal' px='4' type='submit'>
						Check
					</Button>
				</HStack>
			</form>
			<IPCheckScoreTable score={score} isOpen={isOpen} />
		</>
	)
}
