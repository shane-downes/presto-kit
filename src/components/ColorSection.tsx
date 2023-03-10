import type { ColorSectionProps } from "../types/Props";
import { SectionDescription } from "./SectionDescription";
import { SectionHeading } from "./SectionHeading";
import { ColorCard } from "./ColorCard";

export const ColorSection = ({ kit }: ColorSectionProps) => {
	return (
		<section className="flex flex-col gap-12">
			<SectionHeading text="Color Scheme" />
			<div className="flex justify-between ">
				{kit.colors.details.map((color) => (
					<ColorCard color={color} key={color.id} />
				))}
			</div>
			<SectionDescription text={kit.colors.description} />
		</section>
	);
};
