import React from 'react'

const InputComponent = ({type,name,style,placeholder,label,value,onChange}) => {
  return (
		<div className='py-1'>
			<label htmlFor={name} className='font-[500] capitalize py-1 text-lg text-black inline-block'>{label}</label>
			<div className='px-5 py-2 border-black/60 rounded-full border-2'>
				<input
					type={type}
					name={name}
                    id={name}
					className=' placeholder:capitalize border-none outline-none placeholder:text-black/40 w-full focus:bg-transparent '
					placeholder={placeholder}
					onChange={onChange}
					value={value}
				/>
			</div>
		</div>
  );
}

export default InputComponent