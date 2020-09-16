import React from 'react'
import styled, {keyframes} from 'styled-components'
import {fadeIn} from 'react-animations'

export default class StyledTitle extends React.Component {

    render(){
        const {text} = this.props        
        const fade = keyframes`${fadeIn}`;
        const FadeIn = styled.div`
            animation: 3s ${fade};
        `

        return(
            <FadeIn>
                {text}
            </FadeIn>
        )
    }
}