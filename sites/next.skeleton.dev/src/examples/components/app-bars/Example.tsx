import React from 'react';
import { AppBar, ToolBar } from '@skeletonlabs/skeleton-react';
import { ArrowLeft, Paperclip, Calendar, CircleUser } from 'lucide-react';

export const Page: React.FC<any> = () => {
	return (
		<AppBar>
			<AppBar.Toolbar>
				<ToolBar.Lead>
					<ArrowLeft size={24} />
				</ToolBar.Lead>
				<ToolBar.Center>{/* (optional) */}</ToolBar.Center>
				<ToolBar.Trail>
					<Paperclip size={20} />
					<Calendar size={20} />
					<CircleUser size={20} />
				</ToolBar.Trail>
			</AppBar.Toolbar>
			<AppBar.Headline>
				<h2 className="h2">Headline</h2>
			</AppBar.Headline>
		</AppBar>
	);
};
