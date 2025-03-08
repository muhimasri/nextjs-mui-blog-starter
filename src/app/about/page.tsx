import React from "react";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";
import {
  BannerContainer,
  ImageFrame,
} from "../components/banner/banner-elements";
import Header from "../components/Header";
// New icon imports
import SchoolIcon from "@mui/icons-material/School";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import FlagIcon from "@mui/icons-material/Flag";
import ContactMailIcon from "@mui/icons-material/ContactMail"; // New Icon
import LocationOnIcon from "@mui/icons-material/LocationOn"; // New Icon
// Import the reusable AboutSection component
import AboutSection from "./AboutSection";
import EmailSubscription from "../components/EmailSubscription";
import Footer from "../components/Footer";

function AboutPage(): JSX.Element {
  return (
    <>
      <Header />
      <BannerContainer sx={{ pt: 0, pb: 0 }}>
        <Container>
          <Grid
            container
            mt={{ xs: 2, lg: 0 }}
            gap={7}
            direction={{ xs: "column", lg: "row" }}
            flexWrap="nowrap"
            alignItems="center"
            width="auto"
          >
            <Grid item xs={12} md={6}>
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "baseline",
                  gap: 7,
                }}
              >
                <Stack
                  sx={{
                    textAlign: { xs: "center", lg: "left" },
                    maxWidth: { xs: "500px", lg: "100%" },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      color: "about.headerTitle",
                      mb: 7,
                    }}
                  >
                    Hello, I'm Mareli 👋
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "4", sm: "5" },
                      color: "about.headerText",
                      position: "relative",
                      fontWeight: 400,
                    }}
                    component="div"
                  >
                    I am a software developer passionate about sharing knowledge
                    and best practices in the field of software development.
                    <br />
                    <br />
                    My blog covers a wide range of topics including frontend
                    development, backend development, DevOps, and more.
                    <br />
                    <br />
                    Join me on my journey to explore the latest trends and
                    technologies in the software industry.
                  </Typography>
                </Stack>
              </Container>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <Image
                src="/images/about-image.png"
                alt="Profile"
                width={400}
                height={600}
              />
            </Grid>
          </Grid>
        </Container>
      </BannerContainer>

      {/* New Section using CSS masonry layout with re-usable components */}
      <Container sx={{ my: 6 }}>
        <Box sx={{ columnWidth: 300, columnGap: 5 }}>
          <AboutSection
            title="Passionate Software Architect"
            icon={<SchoolIcon sx={{ color: "about.sectionIcon" }} />}
          >
            I believe in designing scalable and maintainable software
            architectures. My passion lies in applying best practices and design
            patterns.
            <br />
            <br />I enjoy mentoring developers, conducting code reviews, and
            guiding teams to deliver high-quality software solutions.
          </AboutSection>

          <AboutSection
            title="Diverse Project Experience"
            icon={<BusinessCenterIcon sx={{ color: "about.sectionIcon" }} />}
          >
            I've worked with startups and enterprises, building web
            applications, mobile apps, and backend systems. My experience spans
            various industries, including e-commerce, healthcare, and finance.
            <br />
            <br />
            Currently, I focus on providing consulting services to help
            companies improve their software development processes and build
            high-quality products.
          </AboutSection>
          <AboutSection
            title="Technical Expertise"
            icon={<CodeIcon sx={{ color: "about.sectionIcon" }} />}
          >
            My expertise includes React, Angular, Vue.js, Node.js, and various
            cloud technologies. I stay up-to-date with the latest trends and
            technologies to provide the best solutions for my clients.
            <br />
            <br />I am also proficient in database design, API development, and
            deployment automation, ensuring that the software I build is
            performant, secure, and scalable.
          </AboutSection>
          <AboutSection
            title="Open Source Contributions"
            icon={<BuildIcon sx={{ color: "about.sectionIcon" }} />}
          >
            I actively contribute to open-source projects and believe in giving
            back to the community. My contributions include bug fixes, new
            features, and documentation improvements.
            <br />
            <br />
            I've also created several open-source libraries and tools that are
            used by developers around the world.
          </AboutSection>
          <AboutSection
            title="Future Goals"
            icon={<FlagIcon sx={{ color: "about.sectionIcon" }} />}
          >
            My goals include creating a comprehensive course on React best
            practices, teaching developers how to build reusable UI components,
            and sharing my knowledge through blog posts and tutorials.
            <br />
            <br />I also aim to explore new technologies and frameworks,
            continuously improving my skills and staying ahead in the
            ever-evolving field of software development.
          </AboutSection>
          {/* New Contact Information Section */}
          <AboutSection
            title="Contact Information"
            icon={<ContactMailIcon sx={{ color: "about.sectionIcon" }} />}
          >
            I'm from [Your Location]. If you'd like to work together or have any
            inquiries, feel free to reach out to me at example@email.com.
            <br />
            <br />I am always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision.
          </AboutSection>
        </Box>
      </Container>
      <EmailSubscription />
      <Footer />
    </>
  );
}

export default AboutPage;
