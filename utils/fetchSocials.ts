import { groq } from 'next-sanity';
import { sanityClient } from '@/lib/sanity';
import { Social } from '@/typings';

const query = groq`
  *[_type == "social"] | order(title desc)
`;

export const fetchSocials = async () => {
	const res: Social[] = await sanityClient.fetch(query);
	//console.log("fetching",socials);
	return res;
};
