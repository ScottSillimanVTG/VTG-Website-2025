import HomePage from '@/components/HomePage/HomePage';
import Layout from '@/components/shared/Layout/Layout';

export default function Home() {
  return (
    <Layout hideNav hideFooter>
      <HomePage />
    </Layout>
  );
}
