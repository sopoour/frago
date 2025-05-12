import { fetchGraphQL } from '@app/lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getMusic(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchGraphQL(
      `query {
            musicCollection(limit: 1000) {
              items {
                albumCollection
                musicTitle
                releaseDate
                url
                description
                distributorUrLs
                musicCover {
                  url
                }
              }
            }
          }`,
    );

    res.status(200).json(data.data.musicCollection.items);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
