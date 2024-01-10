function createDates() {
	let today = new Date();
	let active_date = $state(today);

	function next_month() {
		active_date = new Date(active_date.setMonth(active_date.getMonth() + 1));
	}
	function prev_month() {
		active_date = new Date(active_date.setMonth(active_date.getMonth() - 1));
	}

	return {
		get active_date() {
			return active_date;
		},
		next_month,
		prev_month,
	};
}

export const datez = createDates();
