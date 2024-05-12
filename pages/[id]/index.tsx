import { useRouter } from 'next/router';
import React from 'react';

export const MovieDetailsPage = () => {
  const router = useRouter();
  console.log(router.query.id);
  return <div>The Green Mile Page</div>;
};
