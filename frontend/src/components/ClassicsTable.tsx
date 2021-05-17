import React, {useState} from 'react'
import { Table } from 'react-bootstrap'
import API from '../helpers/client'


const ClassicsTable = () => {
    const [classics, setclassics] = useState({})
    API.get('/api/classics').then((reply) => {
        console.log(reply)
    })

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