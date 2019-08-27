import { mount } from '@vue/test-utils';
import NewsFeed from './NewsFeed';
import NewsItem from './NewsItem';

const mockNewsItem = {
	name: 'Thor',
	liked: false,
};

const factory = values =>
	mount(NewsFeed, {
		data() {
			return {
				...values,
			};
		},
	});

describe('NewsFeed.vue', () => {
	let parentComponent, childComponent;

	beforeEach(() => {
		parentComponent = factory({ newsItem: mockNewsItem });
		childComponent = parentComponent.find(NewsItem);
	});

	test('child component should be properly rendered', () => {
		const itemName = childComponent.find('.feed-item').text();
		expect(itemName).toBe(mockNewsItem.name);
	});

	test('like button should toggle the checkbox state', () => {
		const likeButton = childComponent.find('input');
		likeButton.trigger('click');
		const liked = parentComponent.vm.newsItem.liked;
		expect(liked).toBeTruthy();
	});
});
