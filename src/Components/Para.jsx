/* eslint-disable react/prop-types */

function Para({
	text,
	output
}) {
	return (
		<div
		className=' w-full px-6 md:w-[95%] flex mx-auto text-base md:text-xl lg:text-2xl my-2'
		>
		<p
		className=' text-gray-900 font-medium  mr-2 '
		>
		{text}
		</p>
		<p
		className=' text-gray-200 '>
			{output}
		</p>
		
		</div>
		
	)
}

export default Para
