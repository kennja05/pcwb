import React from 'react'
import Headshot from './images/headshot.jpg'

const Director = () => {
    return(
        <div className='director container'>
            <img className='img-responsive' src={Headshot} alt='William Kenny Headshot' />
            <div className='bio container'>
                
                {/* <p>
                    Hailing from small town Heppner, Oregon, Dr. William Kenny is the founder and 
                    director of the Penn Central Wind Band. After receiving his B.S. in Music Education
                    from Oregon State University, he then went on to recieve both a M.S. and Ed. D. 
                    in Music Education from the University of Illinois at Urbana-Champaign. 
                </p>
                <p>
                    Dr. Kenny currently resides in Lewisburg, Pennsylvania with his wife who is also
                    a music educator. While not directing the Penn Central Wind Band, he is
                    a Professor of Music at Bucknell University where he is the director of bands, 
                    and more recently, served a four year term as Chair of the Faculty. 
                </p>
                <p>
                    There are many events for which that Dr. Kenny directs the PCWB, 
                    and one of his favorites is the annual concert in Hufnagle Park, which is always  
                    a highlight of his summers.
                </p> */}
                <p>
                    Hailing from the small town of Heppner, Oregon, Dr. William Kenny learned about
                    how to be a great dad from his own father, who was a veteran, rancher, and 
                    singer. Although Dr. Kenny claims to not be as good of a singer as his dad, if you
                    ask him nicely, he will perform a rousing rendition of Cold as Ice by Foreigner. 
                </p>
                <p>
                    Kenny is a devoted father to three of his own children, and is quick to describe 
                    the middle child, Jacob, as his favorite son, while daughters, Sadie and Grace, 
                    are locked in a dead heat for favorite daughter - although he never plays favorites. 
                </p>
                <p>
                    Once described as "A little on the cute side" by a former studend on Ratemyprofessor.com, 
                    Kenny is proud to have been able to pass on his good looks to his children, and 
                    hopes that tradition continues for generations to come.  
                </p>
                <p>
                    An accomplished hornist, painist, educator, and administrator, Kenny serves as a 
                    fantasic role model not only for his biological children, but also for all of his 
                    little band children. 
                </p>
            </div>
        </div>
    )
}

export default Director