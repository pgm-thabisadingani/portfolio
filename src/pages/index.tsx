// import styled from 'styled-components';

import { About } from '../components/about';
import { Contact } from '../components/contact';
import { Hero } from '../components/hero';
import { Layout } from '../components/layout';
import { Projects } from '../components/project';
import { Services } from '../components/services';
import { Technologies } from '../components/tech';
import ScrollToTop from 'react-scroll-to-top';

// const FeedContainer = styled.div`
//   h2 {
//     color: ${({ theme }) => theme.colors.pink};
//   }
// `;

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Technologies />
      <Contact />
      <ScrollToTop smooth />
    </Layout>
  );
}
