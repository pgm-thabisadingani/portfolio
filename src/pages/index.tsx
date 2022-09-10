import styled from 'styled-components';
import { Hero } from '../components/hero';
import { Layout } from '../components/layout';
import { Projects } from '../components/project';

const FeedContainer = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeedContainer>
        <h2>Thabisa</h2>
      </FeedContainer>
      <Projects />
    </Layout>
  );
}
