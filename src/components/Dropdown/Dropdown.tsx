import { FC, MouseEventHandler, useState } from 'react';
import './dropdown.scss';

const options = [
  'option1',
  'option2',
  'option3',
  'option4',
  'option5',
  'option6',
];

const Dropdown: FC = () => {
  const [selectedOption, setSelectedOption] = useState('Option 0');
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleOptionChange = (event: any, option: string) => {
    event.preventDefault();
    setSelectedOption(option);
    setIsActive(false);
  };

  const openDropDown: MouseEventHandler<HTMLAnchorElement> = (event): void => {
    event.preventDefault();
    setIsActive((value) => !value);
  };

  return (
    <div className="select" data-state="active">
      <div className="select__title">
        <a
          className="select__title--link"
          data-default="Option 0"
          onClick={openDropDown}
        >
          <p>{selectedOption}</p>
        </a>
      </div>
      <div
        className={`select__content select__content${isActive ? '--active' : '--hidden'}`}
      >
        {options.map((option) => (
          <a
            href=""
            className="select--link select__item"
            onClick={(event) => handleOptionChange(event, option)}
          >
            {option}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;