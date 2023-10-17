'use client';

import { useQuerySubscription } from 'react-datocms';

export default function RealtimeHomepageData({ subscription }) {
    const { data, error, status } = useQuerySubscription(subscription);

    const statusMessage = {
      connecting: 'Connecting to DatoCMS...',
      connected: 'Connected to DatoCMS, receiving live updates!',
      closed: 'Connection closed',
    };

    return (
        <div>
            <p>Connection status: {statusMessage[status]}</p>
            {error && (
                <div>
                <h1>Error: {error.code}</h1>
                <div>{error.message}</div>
                {error.response && (
                    <pre>{JSON.stringify(error.response, null, 2)}</pre>
                )}
                </div>
            )}
            {data && (
                <div>{JSON.stringify(data, null, 2)}</div>
            )}
        </div>
    )

//   return <p>{data.home.title}</p>;
}
