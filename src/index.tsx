import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
	const links = Object.entries({
		Github: 'https://github.com/astingraye',
		Discord: 'https://discord.com/users/1298435571395330108',
		Bluesky: 'https://bsky.app/profile/stingraye.bsky.social',
	});

	return (
		<div className="bg-ctp-base w-screen h-screen p-5 flex flex-col text-center justify-center items-center select-none">
			<div className="scale-[3] lg:scale-[1.75] gap-3 flex flex-col">
				{links.reduce((list, [name, url], index) => {
					console.log(index);
					list.push(
						<a
							href={url}
							target="_blank"
							className={`${
								[
									'text-ctp-rosewater',
									'text-ctp-flamingo',
									'text-ctp-pink',
									'text-ctp-mauve',
									'text-ctp-red',
									'text-ctp-maroon',
									'text-ctp-peach',
									'text-ctp-yellow',
									'text-ctp-green',
									'text-ctp-teal',
									'text-ctp-sky',
									'text-ctp-sapphire',
									'text-ctp-blue',
									'text-ctp-lavender',
								][index]
							} cursor-pointer text-3xl `}
							rel="noopener noreferrer"
						>
							<h1>{name}</h1>
						</a>
					);
					if (index < links.length - 1) {
						list.push(
							<div className="w-full h-0.5 rounded-lg bg-ctp-text" style={{transform: "scaleX(1.25)"}}/>
						);
					}
					return list;
				}, [])}
			</div>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
