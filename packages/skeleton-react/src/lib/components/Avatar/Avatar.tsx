"use client";

import React from "react";
import { AvatarProps } from "./types.js";

export const Avatar: React.FC<AvatarProps> = ({
	src = "",
	alt = "",
	filter = "",
	// Root
	base = "overflow-hidden isolate",
	background = "bg-surface-400-600",
	size = "size-16",
	font = "",
	border = "",
	rounded = "rounded-full",
	shadow = "",
	classes = "",
	// Image
	imageBase = "w-full object-cover",
	imageClasses = "",
	// Children
	children,
}) => {
	return (
		<figure
			className={`${base} ${background} ${size} ${font} ${border} ${rounded} ${shadow} ${classes}`}
			data-testid="avatar"
		>
			{src ? (
				<img
					className={`${imageBase} ${imageClasses}`}
					src={src}
					alt={alt}
					style={{ filter: filter ? `url(${filter})` : undefined }}
				/>
			) : (
				children
			)}
		</figure>
	);
};
