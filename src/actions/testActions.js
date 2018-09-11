export const testAction = () => dispatch => {
	dispatch({
		type: 'TEST_ACTION',
		payload: 'result of test action'
	})
}
