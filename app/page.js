import { draftMode } from 'next/headers';
import { performRequest } from 'lib/datocms';

const homePageQuery = `
  query HomePage {
    home {
      title
    }
  }`;

export default async function Home() {
  const { isEnabled } = draftMode();
  const { home } = await performRequest({ query: homePageQuery, includeDrafts: isEnabled, });
  return (
    <p>{home.title}</p>
  )
}
