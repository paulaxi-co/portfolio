"use client"
import { ProjectCard } from "@/components/common/project-card";
import { ScrollableContainer } from "@/components/common/scrollable-cards";
import { Title } from "@/components/common/text/title";
import { HIGHLIGHTED_PROJECTS } from "@/modules/common/const";
import { Container, Stack, Typography } from "@mui/material";
import { TwoColumnProject } from "./two-column-project";

export function ProjectHome() {
  return (
    <Container>
      <Stack spacing={8}>
        <div>
          <Title center>Highlights</Title>
          <Typography className="text-center">
            A selection of projects that best reflect my process and impact.
          </Typography>
          <ScrollableContainer extractKey={item => item.id} renderItem={({ item }) => <ProjectCard project={item} />} data={HIGHLIGHTED_PROJECTS} />
        </div>
        <TwoColumnProject 
          title="More Work" 
          description="Additional projects that shaped my journey as a designer." 
          projects={[
            {
              url: "https://www.behance.net/gallery/239431439/Gopass-Coderhouse-UX-Research",
              image: '/gopass_thumbnail.png',
              chips: [
                'UX Research',
                'Mobile App',
                'Redesign'
              ],
              title: 'GOPASS',
              description: 'UX research project focused on identifying friction points in urban mobility and validating improvement opportunities through user research and testing.'
            },
            {
              url: 'https://www.behance.net/gallery/239852559/Fyniq-App-Fintech-Coderhouse-UX-Research',
              image: '/fyniq_thumbnail.png',
              chips: [
                'UX Writing',
                'Mobile App',
                'Product Concept'
              ],
              title: 'FYNIQ',
              description: 'Gamified financial product concept where UX writing and narrative shape the experience, exploring how language influences user decisions and behavior.'
            },
          ]}
        />
        <TwoColumnProject 
          title="Thinking Beyond the UI" 
          description="Strategy, systems, and structured thinking behind my work." 
          projects={[
            {
              image: '/safehome_thumbnail.jpg',
              chips: [
                'SCRUM',
                'Product Strategy',
                'Agile'
              ],
              title: 'SAFEHOME',
              description: 'Strategic product document for a fictional app, applying SCRUM to define backlog, MVP, roadmap, and value-driven prioritization.'
            },
            {
              image: '/creative_catelyst_thumbnail.jpg',
              chips: [
                'AI',
                'Prompt Engineering',
                'UX Strategy'
              ],
              title: 'Creative UX Catalyst',
              description: 'Theoretical exploration of prompt engineering as a UX tool to overcome creative saturation, supporting ideation and decision-making in design.'
            },
          ]}
        />
      </Stack>
    </Container>

  );
}
