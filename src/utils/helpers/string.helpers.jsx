export const postContentPreview = (text, num) => {
	if (text.length > num) {
		return `${text.substring(0, num) + '...'}`;
	} else {
		return text;
	}
};
