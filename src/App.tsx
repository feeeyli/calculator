import { useState } from "react";
import { keys } from "./keys";
import * as Slider from "@radix-ui/react-slider";

function App() {
	const [themeValue, setThemeValue] = useState([0]);
	const [screenContent, setScreenContent] = useState("399,981");
	const theme = "theme-" + String(themeValue[0] + 1);

	const nextTheme = () =>
		setThemeValue((old) => {
			const next = old[0] >= 2 ? 0 : old[0] + 1;
			console.log(next);
			return [next];
		});

	return (
		<div
			className={
				theme +
				" h-screen w-screen bg-main-background flex items-center justify-center"
			}
		>
			<div className="font-bold h-full sm:h-min w-full sm:w-[540px] font-spartan px-6 py-8">
				<header className="mb-6 flex justify-between">
					<h1
						className={
							theme +
							" text-[32px] text-text-primary theme-2:text-text-secondary theme-3:text-text-tertiary"
						}
					>
						calc
					</h1>
					<div
						className={
							theme +
							" text-text-primary theme-2:text-text-secondary theme-3:text-text-tertiary flex flex-col items-end"
						}
					>
						<div
							className="flex cursor-pointer select-none"
							onClick={nextTheme}
						>
							<span className="block w-6 text-center">1</span>
							<span className="block w-6 text-center">2</span>
							<span className="block w-6 text-center">3</span>
						</div>
						<div className="flex items-center gap-7">
							<span className="text-xs">THEME</span>
							<Slider.Root
								defaultValue={[0]}
								max={2}
								step={1}
								value={themeValue}
								onClick={nextTheme}
								className="cursor-pointer relative flex items-center select-none touch-none w-[72px] h-6 [&>span]:even:transition-all"
							>
								<Slider.Track className="bg-keypad-background relative grow rounded-full h-6" />
								<Slider.Thumb
									className="block w-6 h-6 border-4 border-keypad-background bg-key-background-tertiary rounded-full hover:bg-violet3 focus:outline-none"
									aria-label="Volume"
								/>
							</Slider.Root>
						</div>
					</div>
				</header>
				<main>
					<div
						className={
							theme +
							" p-6 w-full rounded-lg bg-screen-background theme-3:bg-keypad-background flex justify-end mb-6"
						}
					>
						<span
							className={
								theme +
								" sm:text-[40px] text-[38px] theme-2:text-text-secondary text-text-primary leading-10 theme-3:text-text-tertiary"
							}
						>
							{screenContent}
						</span>
					</div>
					<div className="bg-keypad-background rounded-lg p-6 grid grid-cols-4 gap-3">
						{keys.map((key, index) => {
							const keyColors = {
								primary:
									theme +
									" text-text-secondary theme-3:text-text-tertiary bg-key-background shadow-[inset_0px_-4px_0px_0px_theme(colors.key-shadow)]",
								secondary:
									theme +
									" text-text-primary bg-key-background-secondary shadow-[inset_0px_-4px_0px_0px_theme(colors.key-shadow-secondary)]",
								tertiary:
									theme +
									" text-text-primary theme-3:text-text-secondary bg-key-background-tertiary shadow-[inset_0px_-4px_0px_0px_theme(colors.key-shadow-tertiary)]",
							};
							const getKeyColors = () => {
								if (typeof key === "number")
									return keyColors.primary;
								if (["Del", "Reset"].includes(key))
									return keyColors.secondary;
								if (key === "=") return keyColors.tertiary;
								return keyColors.primary;
							};
							return (
								<button
									key={key}
									className={`flex items-center sm:aspect-auto justify-center uppercase h-[60px] rounded-[4px] ${
										index >= 16
											? "col-span-2 aspect-auto"
											: "aspect-square"
									} ${getKeyColors()}`}
									onClick={() =>
										setScreenContent((old) => old + "0")
									}
								>
									<span
										className={`align-text-bottom ${
											typeof key === "number"
												? "text-[32px]"
												: "text-xl"
										}`}
									>
										{key}
									</span>
								</button>
							);
						})}
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
