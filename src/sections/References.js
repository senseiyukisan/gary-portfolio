/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Image } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';

const CARD_HEIGHT = '200px';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${CARD_HEIGHT};
  margin: auto;
  width: ${CARD_HEIGHT};
`;

const ProjectImage = styled(Image)`
  width: ${CARD_HEIGHT};
  height: auto;
  padding: 10px;
  margin: auto;
  text-align: center;
`;

const Reference = ({ name, logo }) => (
  <CardContainer>
    <Card>
      <ImageContainer>
        <ProjectImage src={logo} />
      </ImageContainer>
    </Card>
  </CardContainer>
);

Reference.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    fluid: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }),
};

const References = () => (
  <Section.Container id="references">
    <Section.Header name="References" />
    <StaticQuery
      query={graphql`
        query ReferenceQuery {
          allContentfulReference {
            edges {
              node {
                name
                logo {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulReference }) => (
        <Flex flexWrap="wrap" justifyContent="space-evenly">
          {allContentfulReference.edges.map(r => (
            <Reference name={r.node.name} logo={r.node.logo.fluid.src} />
          ))}
        </Flex>
      )}
    />
  </Section.Container>
);

export default References;
