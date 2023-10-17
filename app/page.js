import { performRequest } from 'lib/datocms';
import RealtimeHomepageData from 'components/Homepage';
import { draftModeEnabled } from './draftModeEnabled/route';

export const runtime = 'edge';

const homePageQuery = `
  query HomePage {
    home {
      title
    }
  }`;

function getPageRequest(includeDrafts) {
  return { query: homePageQuery, includeDrafts };
}

async function getData() {
  const res = await performRequest(getPageRequest());
  return res;
}

export default async function Home() {
  const isDraftMode = await draftModeEnabled();
  console.log("isDraftMode", isDraftMode);
  const pageRequest = getPageRequest({ includeDrafts: isDraftMode });
  const data = await getData(pageRequest);


  if (isDraftMode) {
    return (
      <RealtimeHomepageData
        subscription={{
          ...pageRequest,
          initialData: data,
          token: process.env.NEXT_DATOCMS_API_TOKEN,
        }}
      />
    );
  }

  return <p>{data.data.home.title}</p>

}
