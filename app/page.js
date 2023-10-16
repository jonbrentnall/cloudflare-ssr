import { draftMode } from 'next/headers';
import { performRequest } from 'lib/datocms';
import RealtimeHomepageData from 'components/Homepage';

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
  console.log(res);
  return res;
}

export default async function Home() {
  const { isEnabled } = draftMode();
  const pageRequest = getPageRequest({ includeDrafts: isEnabled });
  const data = await getData(pageRequest);

  if (isEnabled) {
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

  return <p>{data.home.title}</p>

}
