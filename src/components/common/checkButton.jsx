/* eslint-disable react/prop-types */

import { Button } from 'react-bootstrap'

const CheckButton = ({onClick}) => {
    return (
        <Button className="_check-button" onClick={onClick}>
            <img src="/assets/icons8-tick-30.png" alt="" className="checkIcon-image" />
        </Button>
    )
}

export default CheckButton