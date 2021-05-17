import { AxiosResponse } from 'axios'
import React, {useState, useEffect} from 'react'
import { Button, Modal, Table, InputGroup, FormControl} from 'react-bootstrap'
import API from '../helpers/client'

interface classicStruct {
    id : number,
    phrase : string,
    definition: string,
    created_at: Date,
    updated_at: Date
}

const postClassic = async (phrase : string,
    definition: string) : Promise<void> => {
        API.post('api/classics', {'phrase': phrase, 'definition': definition})
        .then( (reply)=> console.log(reply, ' from postClassic'))
        .catch( (reply) => console.log(reply, ' error in postClassic'))
}

const defaultClassic : classicStruct[] = 
[
    {
        id : 0,
        phrase : 'Hey',
        definition: 'This is Loading...',
        created_at: new Date(),
        updated_at: new Date()
    },
]



const ClassicsTable = () => {
    const [classics, setClassics] = useState<classicStruct[]>(defaultClassic);
    const [modal, setModal] = useState(false)
    const [phrase, setPhrase] = useState('')
    const [definition, setDefinition] = useState('')
    const [triggerRerender, setTriggerRerender] = useState(false)

    useEffect(() => {
        const getData = async () : Promise<void> => 
        {
            await API
                .get('/api/classics')
                .then(
                    (reply: AxiosResponse<Array<classicStruct>> ) => {
                        setClassics(reply.data);
                    }
                ).catch( (reply) => {
                    console.log("Classics table: something went wrong ", reply)
                })
        }
        getData();
        return () => {
            setTriggerRerender(false)
            console.log('cleanup from useEffect in Classics Table')
        }
    }, [triggerRerender])

    return(
        <>
        <Modal show={modal} onHide={() => setModal(!modal)} className='row'>
            <Modal.Header closeButton>Classics</Modal.Header>
            <Modal.Body>
                <InputGroup>
                <FormControl placeholder="Phrase"
                    aria-label="Phrase"
                    aria-describedby="basic-addon1"
                    value={phrase}
                    onChange={ (e) => setPhrase(e.target.value)}
                    type='text'
                    />
                    <FormControl placeholder="Definition"
                    aria-label="Definition"
                    aria-describedby="basic-addon1"
                    value={definition}
                    onChange={ (e) => setDefinition(e.target.value)}
                    type='text'
                    />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(e) => 
                    {
                        postClassic(phrase, definition)
                        setModal(!modal)
                        setTriggerRerender(true)
                    }
                }>Save</Button>
            </Modal.Footer>
        </Modal>
            <div className='flex container pl-2 pr-2 pt-2 pb-2'>
                <div className='row' style={{flexFlow: 'column'}}>
                    <Button onClick={() => setModal(!modal)}>Add a Classic Phrase</Button>
                </div>
                <div className='row'>
                    <Table>
                        <thead>
                            <tr>
                                <th> Classics </th>
                                <th> Phrase </th>
                                <th> Definition </th>
                                <th> Date </th>
                            </tr>
                        </thead>
                        <tbody>
                            {classics.map( (data) => {
                                return( <tr key={data.id} >
                                    <th> {data.id} </th>
                                    <th> {data.phrase} </th>
                                    <th> {data.definition} </th>
                                    <th> {new Date(data.created_at).toDateString()} </th>
                                </tr>)
                            })}
                        </tbody>
                    </Table>
                </div>
                
            </div>
        </>
    )
}

export default ClassicsTable