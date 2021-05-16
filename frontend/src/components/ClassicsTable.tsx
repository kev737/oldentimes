import React from 'react'
import { Table } from 'react-bootstrap'

const ClassicsTable = () => {
    return(
        <Table>
            <thead>
                <tr>
                    <th> Classics </th>
                    <th> Phrase</th>
                    <th> Definition </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th> One </th>
                    <th> Hold your horses</th>
                    <th> Wait </th>
                </tr>
            </tbody>
        </Table>
    )
}

export default ClassicsTable