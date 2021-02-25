import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper, FooterLinkItems, FooterLinkTitle,
    FooterLink, SocialMedia, SocialMediaWrap, SocialIconLink, SocialIcons, SocialLogo, WebsiteRights} from './FooterElements';

const Footer = () => {
    return (
        <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                                <FooterLink to='signin'>hOW IT WORKS</FooterLink>
                                <FooterLink to='signin'>sdomething </FooterLink>
                                <FooterLink to='signin'> hellow us </FooterLink>
                                <FooterLink to='signin'> Agensa </FooterLink>
                                <FooterLink to='signin'> discord </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                                <FooterLink to='signin'>hOW IT WORKS</FooterLink>
                                <FooterLink to='signin'>sdomething </FooterLink>
                                <FooterLink to='signin'> hellow us </FooterLink>
                                <FooterLink to='signin'> Agensa </FooterLink>
                                <FooterLink to='signin'> discord </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                                <FooterLink to='signin'>hOW IT WORKS</FooterLink>
                                <FooterLink to='signin'>sdomething </FooterLink>
                                <FooterLink to='signin'> hellow us </FooterLink>
                                <FooterLink to='signin'> Agensa </FooterLink>
                                <FooterLink to='signin'> discord </FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                                <FooterLink to='signin'>hOW IT WORKS</FooterLink>
                                <FooterLink to='signin'>sdomething </FooterLink>
                                <FooterLink to='signin'> hellow us </FooterLink>
                                <FooterLink to='signin'> Agensa </FooterLink>
                                <FooterLink to='signin'> discord </FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Maybe_SHAH
                        </SocialLogo>
                        <WebsiteRights>Maybe_SHAH © {new Date().getFullYear() } All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='/' target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        </>

    )
}

export default Footer
