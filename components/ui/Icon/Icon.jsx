import s from './Icon.module.css';
//utils
import cn from 'classnames';

const Icon = ({
	children,
	variant = 'regular',
	className = null,
	...other
}) => {
	const classNames = cn(s.fa, s[`fa-${variant}`], className);
	return (
		<i {...other} className={classNames}>
			{children}
		</i>
	);
};

export default Icon;
