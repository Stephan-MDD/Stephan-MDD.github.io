export function Logo(): JSX.Element {
	return (
		<svg width="64" viewBox="0 0 114 87" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g>
				<path
					d="M64.8468 20.1865H65.2358C76.0028 20.1865 83.6524 27.0712 87.3231 35.1159C90.9616 43.09 90.8404 52.5885 85.536 57.8561L84.8718 58.5157L75.6476 49.3554L76.3934 48.6971C77.2132 47.9734 77.669 46.7086 77.6198 45.0352C77.5712 43.3775 77.0237 41.4488 76.009 39.6064C73.9754 35.9135 70.1981 32.7795 65.2358 32.7795H52.166L64.8468 20.1865ZM65.6216 22.0577L56.7061 30.9115H65.2358C71.0734 30.9115 75.3959 34.6024 77.6577 38.7095C78.7907 40.767 79.4398 42.982 79.4985 44.9807C79.5462 46.6037 79.2024 48.1738 78.3141 49.3628L84.8424 55.8458C88.7483 51.2162 88.9202 43.139 85.6114 35.8875C82.2092 28.4312 75.2715 22.2192 65.6216 22.0577Z"
					fill="url(#gradient-grey)"
				/>
				<path
					d="M31.8544 35.5999L47.5632 20H63.272L47.5632 35.5999L55.4176 43.3999L39.7088 58.9998H24L39.7088 43.3999L31.8544 35.5999Z"
					fill="url(#gradient-blue)"
				/>
				<path
					d="M65.2356 35.5996L49.5269 51.1995L57.3812 58.9995L65.2356 51.1995L73.09 58.9995H88.7988L65.2356 35.5996Z"
					fill="url(#gradient-green)"
				/>
			</g>
			<defs>
				<linearGradient
					id="gradient-grey"
					x1="70.9938"
					y1="20.1865"
					x2="70.9938"
					y2="58.5157"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="var(--grey-light)" />
					<stop offset="1" stopColor="var(--grey-primary)" />
				</linearGradient>
				<linearGradient
					id="gradient-blue"
					x1="43.636"
					y1="20"
					x2="43.636"
					y2="58.9998"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="var(--blue-light)" />
					<stop offset="1" stopColor="var(--blue-primary)" />
				</linearGradient>
				<linearGradient
					id="gradient-green"
					x1="69.1628"
					y1="35.5996"
					x2="69.1628"
					y2="58.9995"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="var(--green-light)" />
					<stop offset="1" stopColor="var(--green-primary)" />
				</linearGradient>
			</defs>
		</svg>
	);
}
