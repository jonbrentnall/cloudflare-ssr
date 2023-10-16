import { draftMode } from 'next/headers';
import { performRequest } from 'lib/datocms';

async function getData() {
  const { isEnabled } = draftMode();
  const homePageQuery = `
    query HomePage {
      home {
        title
      }
    }`;
  const res = await performRequest({ query: homePageQuery, includeDrafts: isEnabled, });
  return res;
}

export default async function Home() {
  const { home } = await getData();
  return (
    <p>{home.title}</p>
  )
}
