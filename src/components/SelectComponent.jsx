import React from 'react'

const SelectComponent = ({label,options}) => {
  return (
		<div className='py-1'>
			<label
				htmlFor=''
				className='font-[500] text-lg py-1 inline-block'
			>
				{label}
			</label>
			<div className='px-5 py-2 border-black/60 rounded-full border-2'>
				<select className='w-full'>
					{options?.map((option) => (
						<option value={option}>{option}</option>
					))}
				</select>
			</div>
		</div>
  );
}

export default SelectComponent