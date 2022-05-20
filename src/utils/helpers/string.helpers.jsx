export const postContentPreview = (text) => {
	if (text.length > 60) {
		return `${text.substring(0, 60) + '...'}`;
	} else {
		return text;
	}
};
