import { styled } from 'styled-components';

export const FooterSection = styled.footer`
  padding: 40px 0 20px 0;
  background-color: var(--headerBg);
`;
export const FooterPositioning = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: start;
    gap: 70px;
  }
`;

export const FooterTitle = styled.h2`
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
`;

export const FooterSocialsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
`;

export const FooterPolicyText = styled.p`
  letter-spacing: -0, 28px;
`;
