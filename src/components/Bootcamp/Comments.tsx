import { TextField } from '@material-ui/core';

const Comments = () => {
	const inputProps = {
		step: 300,
	};

	return (
		<section>
			<form autoComplete='off'>
				<TextField
					id='comment'
					type='text'
					label='댓글을 남겨주세요'
					inputProps={inputProps}
				/>
				;
			</form>
		</section>
	);
};

export default Comments;
