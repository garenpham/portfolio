import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'pageInfo',
	title: 'Page Info',
	type: 'document',
	fields: [
		defineField({
			type: 'string',
			name: 'name',
			title: 'Name',
		}),
		defineField({
			type: 'string',
			name: 'role',
			title: 'Role',
		}),
		defineField({
			type: 'image',
			name: 'heroImage',
			title: 'Image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			type: 'string',
			name: 'backgroundInformation',
			title: 'Background Information',
		}),
		defineField({
			type: 'image',
			name: 'profilePic',
			title: 'Profile Picture',
			options: { hotspot: true },
		}),
		defineField({
			type: 'string',
			name: 'phoneNumber',
			title: 'Phone Number',
		}),
		defineField({
			type: 'string',
			name: 'email',
			title: 'Email',
		}),
		defineField({
			type: 'string',
			name: 'address',
			title: 'Address',
		}),
		defineField({
			type: 'array',
			name: 'jobs',
			title: 'Jobs',
			of: [{ type: 'string' }],
		}),
	],
});
