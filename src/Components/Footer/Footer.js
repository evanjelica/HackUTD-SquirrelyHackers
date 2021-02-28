import React from 'react';
import {
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>

          <SocialLogo to='/'>
            <SocialIcon />
            Squirrel Pantry
          </SocialLogo>

          <WebsiteRights>Squirrel Pantry 2021 © All Rights Reserved.</WebsiteRights>
          <SocialIcons>

            <SocialIconLink href='https://github.com/evanjelica/HackUTD-SquirrelyHackers' target='_blank' aria-label='Facebook'>
              <FaGithub />
            </SocialIconLink>

            <SocialIconLink href='https://www.linkedin.com/in/anjelica-avorque/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>

            <SocialIconLink href='https://www.linkedin.com/in/samridhi-ganguly-1304b2203/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>

            <SocialIconLink href='https://www.linkedin.com/in/kim-nhi-ngo-30549b1b8/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>

          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;