import { getHomepageData } from './getHomepage/route';

export default async function Home() {
  const { home } = await getHomepageData();
  return (
    <p>{home.title}</p>
  )
}
