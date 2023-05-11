import { groq } from 'next-sanity';
import { sanityClient } from '@/lib/sanity';
import { Skill } from '@/typings';

const query = groq`
  *[_type == "skill"]
`;

export const fetchSkills = async () => {
	const res: Skill[] = await sanityClient.fetch(query);
	//console.log("fetching",skills);
	return res;
};
