import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import "./accordion.css"
const AccorDropdown = ({isActive, item, headerName}) => {
    const [expanded, setExpanded] = useState(isActive)

    useEffect(() => {
        setExpanded(isActive)
    }, [isActive])

  return (
    <Accordion defaultActiveKey ='0'>
        <Accordion.Item eventKey='0'>
            <Accordion.Header>
                {headerName}
            </Accordion.Header>

            <Accordion.Body>
                <ul>
                    {item.map((value) => (
                        <li className='expanded-submenu'>{value}</li>
                    ))}
                </ul>

            </Accordion.Body>    
        </Accordion.Item>
    </Accordion>
  )
}

export default AccorDropdown