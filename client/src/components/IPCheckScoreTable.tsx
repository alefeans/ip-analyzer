import React from 'react'
import { Table, Tbody, Tr, Td, TableContainer, ScaleFade, } from '@chakra-ui/react'
import { IPCheckScore } from './shared/types/IPCheckScore'

type IPCheckScoreTableProps = {
	isOpen: boolean,
	score: IPCheckScore
}

export default function IPCheckScoreTable({ isOpen, score }: IPCheckScoreTableProps) {
	return (
		<ScaleFade initialScale={0.6} in={isOpen}>
			<TableContainer p={14}>
				<Table variant='striped' size='md'>
					<Tbody>
						<Tr>
							<Td>IP</Td>
							<Td>{score.ip}</Td>
						</Tr>
						<Tr>
							<Td>IP Version</Td>
							<Td>{score.ipVersion}</Td>
						</Tr>
						<Tr>
							<Td>Is Public?</Td>
							<Td>{score.isPublic ? 'Yes' : 'No'}</Td>
						</Tr>
						<Tr>
							<Td>Country</Td>
							<Td>{score.country}</Td>
						</Tr>
						<Tr>
							<Td>Total Reports</Td>
							<Td>{score.reports}</Td>
						</Tr>
						<Tr>
							<Td>ISP</Td>
							<Td>{score.isp}</Td>
						</Tr>
						<Tr>
							<Td>Usage Type</Td>
							<Td>{score.usageType}</Td>
						</Tr>
						<Tr>
							<Td>Domain</Td>
							<Td>{score.domain}</Td>
						</Tr>
						<Tr>
							<Td>Risk Score</Td>
							<Td>{score.riskScore}%</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</ScaleFade>
	)
}
