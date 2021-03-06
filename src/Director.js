import React from 'react'
import StyledTitle from './StyledComponents/StyledTitle'
import StyledHr from './StyledComponents/StyledHr'
import styled, {keyframes} from 'styled-components'
import {fadeInUp} from 'react-animations'

import BillKenny from './images/BillKenny.jpg'

class Director extends React.Component {
    
    componentDidMount(){
        document.title = 'PCWB | Director'
    }

    render(){
        const fade = keyframes`${fadeInUp}`
        const MyDiv = styled.div`
            animation: 2s ${fade}
        `
        return(
            <div className='director container-fluid'>
                <StyledTitle text='Dr. William Kenny' type='h1'/>
                <StyledHr />
                <MyDiv>
                    <div className='row'>
                        <div className='col-sm-3'></div>
                        <div className='col-sm-6'>
                            <p>
                                William Kenny is Professor of Music at Bucknell University where for 
                                the past thirty years he has conducted the university Symphonic Band 
                                and taught such courses as Conducting, Instrumental Methods, Music 
                                Theory, Jazz History, Brass and Percussion Methods, and Orchestration. 
                                He also teaches French horn, and, for many years, led the University 
                                Jazz Band having moved the band from a club activity to an integral 
                                part of the music department's curricular ensemble offerings. More 
                                recently, he accepted the leadership role of the university's Bison 
                                Band, and after a 25 year absence from working with athletic bands—and 
                                much to his surprise—has enjoyed that a great deal. 
                            </p>
                            <img className='img-responsive img-thumbnail' id='director-pic' 
                                src={BillKenny} alt='William Kenny Headshot'/>
                            <p>
                                While at Bucknell, he has served as Associate Dean of Faculty in the
                                College of Arts and Sciences, ten years as Chair of the Department of 
                                Music, and for the past fours years, as chair of the 400-member 
                                Bucknell University faculty.
                            </p>
                            <p>
                                In addition to conducting regional high school county and district 
                                band festivals, ensembles under Kenny’s direction have been selected 
                                to perform for the Pennsylvania Music Educators Association Conference, 
                                the Eastern Conference of the College Band Directors National 
                                Association, and for the national convention of the Association of 
                                Concert Bands. Articles he has written have appeared in prominent music 
                                publications including the Music Educators Journal and The 
                                Instrumentalist.  
                            </p>
                            <p>
                                In addition to his university work, Kenny is founder and conductor 
                                of the Penn Central Wind Band, an ensemble comprising professional 
                                musicians and music teachers from central Pennsylvania and beyond. 
                                The PCWB is a recipient of the Sudler Silver Scroll—an award 
                                administered by the John Philip Sousa Foundation “recognizing 
                                community and adult concert bands of outstanding musical excellence.” 
                                It was just the 30th ensemble to receive this international award since 
                                its inception in 1987. Since the band's founding over twenty-five years 
                                ago, its Sousa-style concerts and its performances of contemporary band 
                                music have been enjoyed by many throughout the region.
                            </p>
                            <p>
                                As a performer, Kenny serves as principal horn with the Williamsport 
                                Symphony Orchestra and the Orchestra of the Susquehanna Valley Chorale, 
                                and as hornist with the Commonwealth Brass Quintet. He also performs 
                                regularly with touring artists, most recently this past winter with 
                                Mannheim Steamroller as part of the group's northeast regional 
                                Christmas tour.
                            </p>
                            <p>
                                A graduate of Oregon State University, Kenny received both his 
                                master's degree and doctorate in music education from the University of 
                                Illinois. He lives in Lewisburg with his wife, Amy—his Bison Band 
                                co conspirator and one of the fine flutists in the PCWB.
                            </p>
                        </div>
                        <div className='col-sm-3'></div>
                    </div>
                </MyDiv>
            </div>
        )
    }
}

export default Director