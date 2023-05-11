import { groq } from 'next-sanity';
import { sanityClient } from '@/lib/sanity';
import { Project } from '@/typings';

const query = groq`
  *[_type=='project']{
    ...,
    technologies[]->
  }
`;

export const fetchProjects = async () => {
	const res: Project[] = await sanityClient.fetch(query);
	//console.log("fetching",projects);
	return res;
};
