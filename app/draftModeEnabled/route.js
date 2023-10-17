import { draftMode } from 'next/headers';

export const runtime = 'edge';

export async function draftModeEnabled() {
    const { isEnabled } = draftMode();

    console.log("isEnabled", isEnabled);

    return isEnabled;
  }
