/* eslint-disable react/jsx-indent */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Fragment } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Heading, Flex, Box, Text } from 'rebass';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => (
  <Section.Container id="home">
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          contentfulAbout {
            name
            roles
            socialLinks {
              id
              url
              name
              fontAwesomeIcon
            }
          }
          site {
            siteMetadata {
              deterministicBehaviour
            }
          }
        }
      `}
      render={({ contentfulAbout, site }) => {
        const { name, socialLinks, roles } = contentfulAbout;
        const { deterministicBehaviour } = site.siteMetadata;

        return (
          <Fragment>
            <Heading
              as="h3"
              color="primary"
              fontSize={[3, 4, 5]}
              mb={[3, 5]}
              textAlign="center"
              style={centerHorizontally}
            >
              <TextLoop interval={3500}>
                {roles
                  .sort(() => deterministicBehaviour || Math.random() - 0.5)
                  .map(text => (
                    <Text width={[300, 500]} key={text}>
                      {text}
                    </Text>
                  ))}
              </TextLoop>
            </Heading>
            <Box
              sx={{
                width: '100%',
                height: 0,
                // paddingBottom: (900 / 16) + '%',
                position: 'relative',
                overflow: 'hidden',
                '& > iframe': {
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  border: 0,
                },
              }}
            >
              <iframe
                width="100%"
                height="315"
                src="https://player.vimeo.com/video/432497948"
                frameBorder="0"
                allowFullScreen
              />
            </Box>
            <Flex
              marginTop="10px"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
            >
              {socialLinks.map(({ id, ...rest }) => (
                <Box mx={3} fontSize={[5, 6, 6]} key={id}>
                  <SocialLink {...rest} />
                </Box>
              ))}
            </Flex>
          </Fragment>
        );
      }}
    />
  </Section.Container>
);

export default LandingPage;
