import { groq } from 'next-sanity';
import { sanityClient } from '@/lib/sanity';
import { Experience } from '@/typings';

const query = groq`
  *[_type=='experience']{
    ...,
    technologies[]->
  } | order(dateEnded desc)
`;

export const fetchExperiences = async () => {
	const res: Experience[] = await sanityClient.fetch(query);
	//console.log("fetching",experiences);
	return res;
};
