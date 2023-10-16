import { draftMode } from 'next/headers';
import { performRequest } from 'lib/datocms';

export const runtime = 'edge';

export async function getHomepageData() {
    const { isEnabled } = draftMode();
    const homePageQuery = `
        query HomePage {
            home {
                title
            }
        }`;

    const data = await performRequest({ query: homePageQuery, includeDrafts: isEnabled, });

    console.log(isEnabled);

    return data;
  }
