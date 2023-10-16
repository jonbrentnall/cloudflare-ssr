'use client';

import { useQuerySubscription } from 'react-datocms';

export default function RealtimeHomepageData({ subscription }) {
  const { data } = useQuerySubscription(subscription);

  return <p>{data.home.title}</p>;
}
