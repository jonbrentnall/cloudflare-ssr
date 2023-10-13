import { draftMode } from 'next/headers'

export const runtime = 'edge';

export async function GET(request) {
  draftMode().enable()
  return new Response('Draft mode is enabled')
}
