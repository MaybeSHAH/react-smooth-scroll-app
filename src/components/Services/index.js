import React from 'react'
import { ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements';
import Icon1 from '../../images/svg-1.svg';
const Services = () => {
    return (
        <>
        <ServicesContainer id="services">
            <ServicesH1>
                Our Services
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce Expences</ServicesH2>
                            <ServicesP>
                                We help reduce your fees
                            </ServicesP>
                        
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                        <ServicesH2>Virtual offices</ServicesH2>
                            <ServicesP>
                                You can access our platform
                            </ServicesP>
                        
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                        <ServicesH2>Prmium</ServicesH2>
                            <ServicesP>
                                unl;ock memeber ship
                            </ServicesP>
                        
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>

        </>
    )
}

export default Services
