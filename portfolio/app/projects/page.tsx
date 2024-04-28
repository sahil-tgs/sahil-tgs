'use client';

import { Container, Title, Text, Card, Image, Button, Group } from '@mantine/core';
// import styles from './projects.module.css'; // Import CSS module for styling

const projects = [
  {
    title: 'Project 1',
    description: 'This is a brief description of Project 1',
    image: '/project1.jpg',
  },
  {
    title: 'Project 2',
    description: 'This is a brief description of Project 2',
    image: '/project2.jpg',
  },
  // Add more projects as needed
];

export default function ProjectsPage() {
  return (
    <div>
      <Container>
        <Title>My Projects</Title>
        <Group position="center" mt="xl">
          {projects.map((project, index) => (
            <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={project.image} height={160} alt={project.title} />
              </Card.Section>
              <Text weight={500} mt="md" size="lg">
                {project.title}
              </Text>
              <Text mt="sm">{project.description}</Text>
              <Button variant="light" color="blue" mt="md" radius="md">
                View Project
              </Button>
            </Card>
          ))}
        </Group>
      </Container>
    </div>
  );
}