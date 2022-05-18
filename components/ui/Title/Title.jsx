//styles
import s from './Title.module.css';
import classNames from 'classnames';

const Title = (props) => {
  const { children, className = false, priority = 1 } = props;

  const classnames = classNames(s.title, className);
  const PriorityTag = `h${priority}`;

  return <PriorityTag className={`${s[PriorityTag]} ${classnames}`}>{children}</PriorityTag>;
};

export default Title;
