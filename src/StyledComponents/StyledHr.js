import React from 'react'
import styled, {keyframes} from 'styled-components'
import {fadeInLeft} from 'react-animations'

 
export default class StyledHr extends React.Component {

    render(){
        const drawLeft = keyframes`${fadeInLeft}`
        const DrawnHr = styled.div`
            animation: 3s ${drawLeft}
        ` 
        return(
            <DrawnHr>
                <hr className='my-2'></hr>
            </DrawnHr>
        )
    }
}