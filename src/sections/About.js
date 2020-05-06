import React from 'react';
import { Box, Image, Flex } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import markdownRenderer from '../components/MarkdownRenderer';

const ProfilePicture = styled(Image)`
  border-radius: 25%;
  transition: all 0.25s ease-out;

  &:hover {
    border-radius: 5%;
  }
`;

const About = () => (
  <Section.Container id="about">
    <Section.Header name="About" label="person" />
    <StaticQuery
      query={graphql`
        query AboutMeQuery {
          contentfulAbout {
            aboutMe {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
            profile {
              title
              image: resize(width: 450, quality: 100) {
                src
              }
            }
          }
        }
      `}
      render={data => {
        const { aboutMe, profile } = data.contentfulAbout;
        return (
          <Flex justifyContent="center" alignItems="center" flexWrap="wrap">
            <Box
              width={[1, 1, 2 / 6]}
              style={{ maxWidth: '300px', margin: 'auto' }}
            >
              <Fade right>
                <ProfilePicture
                  src={profile.image.src}
                  alt={profile.title}
                  mt={[3, 3, 0]}
                  ml={[48, 56, 40]}
                  mb={[3, 3, 0]}
                />
              </Fade>
            </Box>
            <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]}>
              <Fade bottom>
                <ReactMarkdown
                  source={aboutMe.childMarkdownRemark.rawMarkdownBody}
                  renderers={markdownRenderer}
                />
              </Fade>
            </Box>
          </Flex>
        );
      }}
    />
  </Section.Container>
);

export default About;
