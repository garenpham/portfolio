import { groq } from 'next-sanity';
import { sanityClient } from '@/lib/sanity';
import { PageInfo } from '@/typings';

const query = groq`
  *[_type == "pageInfo"][0]
`;

export const fetchPageInfo = async () => {
	const res: PageInfo = await sanityClient.fetch(query);
	//console.log("fetching",pageInfo);
	return res;
};
