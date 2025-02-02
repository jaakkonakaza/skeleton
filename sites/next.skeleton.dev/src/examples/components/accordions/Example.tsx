import React, { useState } from 'react';
import { Accordion } from '@skeletonlabs/skeleton-react';
import { Club, Diamond, Heart, Spade } from 'lucide-react';

export const Page: React.FC<any> = () => {
	const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';

	// Value may optionally implement a useState hook for programmatic use cases.
	const [value, setValue] = useState(['club']);

	return (
		<Accordion value={value} onValueChange={setValue}>
			<Accordion.Item id="club">
				<Accordion.Control lead={<Club size={24} />}>Club</Accordion.Control>
				<Accordion.Panel>{lorem}</Accordion.Panel>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item id="diamond">
				<Accordion.Control lead={<Diamond size={24} />}>Diamond</Accordion.Control>
				<Accordion.Panel>{lorem}</Accordion.Panel>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item id="heart">
				<Accordion.Control lead={<Heart size={24} />} disabled>
					Heart (disabled)
				</Accordion.Control>
				<Accordion.Panel>{lorem}</Accordion.Panel>
			</Accordion.Item>
			<hr className="hr" />
			<Accordion.Item id="spade">
				<Accordion.Control lead={<Spade size={24} />}>Spade</Accordion.Control>
				<Accordion.Panel>{lorem}</Accordion.Panel>
			</Accordion.Item>
		</Accordion>
	);
};
