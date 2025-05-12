import { fetchGraphQL } from '@app/lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getLiveEvents(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchGraphQL(
      `query {
            liveEventsCollection(limit: 1000) {
              items {
                constellation
                date
                eventType
                location
                ticketLink
                ticketNotiz
              }
            }
          }`,
    );

    res.status(200).json(data.data.liveEventsCollection.items);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
