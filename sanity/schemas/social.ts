import { defineType, defineField } from 'sanity';

export default defineType({
	name: 'social',
	title: 'Social',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			description: 'Social Media',
			type: 'string',
		}),
		defineField({
			name: 'url',
			title: 'Link',
			type: 'url',
		}),
	],
});
