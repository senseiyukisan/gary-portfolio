import styled from 'styled-components';
import { Card as CardRebass } from 'rebass';

export const CardContainer = styled.div`
  display: grid;
  grid-gap: 30px;

  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => props.minWidth}, 1fr)
  );
  justify-items: center;

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const ProjectCard = styled(CardRebass).attrs({
  bg: 'black',
  color: 'black',
  boxShadow: 0,
  borderRadius: 0,
})`
  position: relative;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s;
  top: 0;
  height: 100%;
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};

  &:hover {
    color: black;
    background-color: black;
    top: -10px;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
    // webkit-filter: blur(4px); /* Chrome, Safari, Opera */
    // filter: blur(4px);
  }
`;

export default ProjectCard;
