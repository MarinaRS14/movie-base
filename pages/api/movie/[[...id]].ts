import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { query, url } = req;

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const KEY = process.env.NEXT_PUBLIC_KEY;

  const id = query.id;

  // const id = url?.substring

  let data;

  if (url?.startsWith('/api/movie')) {
    const result = await fetch(
      new URL(`/3/movie/${id}?api_key=${KEY}&append_to_response=videos`, BASE_URL),
    );

    data = await result.json();
    return res.status(200).json(data);
  }
}
