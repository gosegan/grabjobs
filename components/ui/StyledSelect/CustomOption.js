export const CustomOption = ({ innerRef, innerProps, isDisabled, label }) =>
  !isDisabled ? (
    <div ref={innerRef} {...innerProps} className="p-2 hover:bg-grey text-sm cursor-pointer">
      {label}
    </div>
  ) : null;
