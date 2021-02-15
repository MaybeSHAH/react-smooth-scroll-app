import React from 'react'
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg } from './HeroElements'; 
const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to my website.</HeroH1>
                <HeroP>
                    Check my full website below. 
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup'>
                        Get Started {hover ? <Arrowforward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
