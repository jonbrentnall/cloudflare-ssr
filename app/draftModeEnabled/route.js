import { draftMode, cookies } from 'next/headers';

export const runtime = 'edge';

export async function draftModeEnabled() {
    // const { isEnabled } = draftMode();
    const cookieStore = cookies()
    const isEnabled = cookieStore.has('__prerender_bypass')

    return isEnabled;
  }
