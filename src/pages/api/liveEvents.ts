import { fetchGraphQL } from '@app/lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getLiveEvents(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchGraphQL(
      `query {
            liveEventCollection(limit: 1000) {
              items {
                date
                venue
                location
                ticketLink
                ticketNotiz
              }
            }
          }`,
    );

    res.status(200).json(data.data.liveEventCollection.items);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
