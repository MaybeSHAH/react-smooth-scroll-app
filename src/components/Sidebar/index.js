import React from 'react'
import { SidebarContainer,
         Icon,
        CloseIcon,
        SidebarMenu,
        SidebarLink,
        SidebarWrapper,
        SideBtnWrap,
        SidebarRoute,
         } from './SidebarElements';

const Sidebar = ({isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={ toggle }>
                        About
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={ toggle }>
                        Projects
                    </SidebarLink>
                    <SidebarLink to="services" onClick={ toggle }>
                        Games
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={ toggle }>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                {/*<SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>*/}
            </SidebarWrapper>
        </SidebarContainer>

    )
}

export default Sidebar;
