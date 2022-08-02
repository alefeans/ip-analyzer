import React from 'react'
import {
	Table,
	Tbody,
	Tr,
	Td,
	TableContainer,
	ScaleFade,
} from '@chakra-ui/react'
import { IPCheckResult } from './IPCheckInput'

type IPCheckResultTableProps = {
	isOpen: boolean,
	result: IPCheckResult
}

export default function IPCheckResultTable({ isOpen, result }: IPCheckResultTableProps) {
	return (
		<ScaleFade initialScale={0.5} in={isOpen}>
			<TableContainer p={14}>
				<Table variant='striped' size='md'>
					<Tbody>
						<Tr>
							<Td>IP Version</Td>
							<Td>{result.ip_version}</Td>
						</Tr>
						<Tr>
							<Td>Is Public?</Td>
							<Td>{result.ip_version ? 'Yes' : 'No'}</Td>
						</Tr>
						<Tr>
							<Td>Country</Td>
							<Td>{result.country}</Td>
						</Tr>
						<Tr>
							<Td>Total Reports</Td>
							<Td>{result.reports}</Td>
						</Tr>
						<Tr>
							<Td>ISP</Td>
							<Td>{result.isp}</Td>
						</Tr>
						<Tr>
							<Td>Usage Type</Td>
							<Td>{result.usage_type}</Td>
						</Tr>
						<Tr>
							<Td>Domain</Td>
							<Td>{result.domain}</Td>
						</Tr>
						<Tr>
							<Td>Risk Score</Td>
							<Td>{result.risk_score}%</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</ScaleFade>
	)
}
