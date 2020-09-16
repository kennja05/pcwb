import React from 'react'
import styled, {keyframes} from 'styled-components'
import {fadeIn} from 'react-animations'

export default class StyledTitle extends React.Component {

    render(){
        const {text, type} = this.props        
        const fade = keyframes`${fadeIn}`;
        const FadeIn = styled.div`
            animation: 3s ${fade};
        `

        return(
            type === 'h1' ?
            <FadeIn>
                <h1>{text}</h1>
            </FadeIn>
            :
            type === 'h2' ?
            <FadeIn>
                <h2>{text}</h2>
            </FadeIn>
            :
            <FadeIn>
                <p>{text}</p>
            </FadeIn>
        )
    }
}