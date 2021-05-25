import React from 'react'
import { ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements';
import Icon1 from '../../images/coc100.png';
import Icon2 from '../../images/mlbb100.svg';
import Icon3 from '../../images/cs240.svg';
const Services = () => {
    return (
        <>
        <ServicesContainer id="services">
            <ServicesH1>
                I'm fond of these games
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                        <ServicesH2>Clash of Clans</ServicesH2>
                            <ServicesP>
                                #GOOLYOPQ
                            </ServicesP>
                        
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                        <ServicesH2>Mobile Legends Bang Bang</ServicesH2>
                            <ServicesP>
                                ID: 6682117803
                            </ServicesP>
                        
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                        <ServicesH2>CSGO</ServicesH2>
                            <ServicesP>
                                IGN: HorseWithNoName
                            </ServicesP>
                        
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>

        </>
    )
}

export default Services
