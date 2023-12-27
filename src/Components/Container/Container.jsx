/* eslint-disable react/prop-types */

function Container({
	color = "",
	children,
	style
}) {
	return (
		<div
		className={`w-full overflow-auto ${color} no-scrollbar`}
		style ={{backgroundColor:style}}
		>
			{children}
		</div>
	)
}

export default Container
