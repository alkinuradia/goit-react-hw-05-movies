import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Details = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
    align-items: center;
  }
`;

export const Poster = styled.div`
  width: 250px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

export const Heading = styled.h3`
  color: #444445;
  font-size: 24px;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  font-style: italic;
  color: grey;
`;
export const ListLink = styled(NavLink)`
  border-radius: 4px;
  padding: 2px 10px;
  background-color: #0496c2;
  font-size: 18px;
  color: #fff;
  transition: all 0.3s;
  &:hover,
  &:focus {
    box-shadow: 0 4px 4px #000;
  }
`;
export const ListItem = styled.li`
  margin-bottom: 15px;
`;

