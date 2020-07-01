import React from 'react';
import PropTypes from 'prop-types';
import { Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';


const Title = styled(Text)`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin: 10px;  
`;

const VideoContainer = styled.div`
  margin: auto;
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0;
  height: 0;
  overflow: hidden;
`;

const Project = ({
  name,
  description,
  url,
  publishedDate,
  thumbnail
}) => (
  <Box p="5px">
    <CardContainer>
      <Card>
        <Title>
          {name}
        </Title>
        <p>{description}</p>
        <VideoContainer>
          <iframe
            id="player"
            type="text/html"
            position='absolute'
            top='0'
            left='0'
            // width="640"
            // height="360"
            src={url}
            frameBorder='0'
            allowFullScreen
          />
          {/* <iframe id="player" type="text/html" width="640" height="360"
  src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
  frameborder="0"></iframe> */}
        </VideoContainer>
      </Card>
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
    <Section.Header name="Projects"/>
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
        <Flex flexWrap="wrap" justifyContent="flex-start">
          {allContentfulProject.edges.map((p) => (
            <Project name={p.node.name} description={p.node.description} url={p.node.url} publishedDate={p.node.publishedDate} thumbnail={p.node.thumbnail}/>
          ))}
        </Flex>
      )}
    />
  </Section.Container>
);

export default Projects;