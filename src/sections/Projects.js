/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import PropTypes from 'prop-types';
import { Text, Flex, Box, Link, Heading } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Section from '../components/Section';
import { CardContainer, ProjectCard } from '../components/ProjectCard';

const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 10px;
`;

const VideoContainer = styled.div`
  position: relative;
  // padding-bottom: 56.25%;
  padding-top: 25;
  height: 100%;
  overflow: hidden;
`;

const Project = ({ name, description, url, publishedDate, thumbnail }) => (
  <Box p="5px">
    <CardContainer>
      <ProjectCard name={name}>
        <VideoContainer>
          <iframe
            id="player"
            type="text/html"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            src={url}
            frameBorder="0"
            allowFullScreen
          />
        </VideoContainer>
      </ProjectCard>
    </CardContainer>
  </Box>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  thumbnail: PropTypes.shape({
    fluid: PropTypes.shape({
      src: PropTypes.string,
    }),
    title: PropTypes.string,
  }),
};

const Projects = () => (
  <Section.Container id="projects">
    <Section.Header name="Projects" />
    <StaticQuery
      query={graphql`
        query ProjectQuery {
          allContentfulProject {
            edges {
              node {
                id
                name
                url
                description
                thumbnail {
                  fluid {
                    src
                  }
                }
                publishedDate(formatString: "YYYY-MM-DD")
              }
            }
          }
        }
      `}
      render={({ allContentfulProject }) => (
        <Flex
          flexWrap="wrap"
          justifyContent={[
            'space-evenly',
            'space-evenly',
            'space-evenly',
            'flex-start',
          ]}
          flexDirection="row"
        >
          {allContentfulProject.edges.map(p => (
            <Project
              name={p.node.name}
              description={p.node.description}
              url={p.node.url}
              publishedDate={p.node.publishedDate}
              thumbnail={p.node.thumbnail}
            />
          ))}
        </Flex>
      )}
    />
  </Section.Container>
);

export default Projects;
