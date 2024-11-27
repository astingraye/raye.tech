import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Hyperlink({ url, name }) {
	return (
		<a
			href={url}
			target="_blank"
			className="text-ctp-mauve cursor-pointer text-3xl"
			rel="noopener noreferrer"
		>
			<h1>{name}</h1>
		</a>
	);
}

function App() {
	const links = Object.entries({
		Github: 'https://github.com/astingraye',
		Discord: 'https://discord.com/users/1298435571395330108',
		Bluesky: "https://bsky.app/profile/stingraye.bsky.social"
	});

	return (
		<div className="bg-ctp-base w-screen h-screen p-5 flex flex-col text-center justify-center items-center select-none">
			<div className="scale-[3] lg:scale-[1.75] gap-3 flex flex-col">
				{links.reduce((list, [name, url], index) => {
					list.push(<Hyperlink url={url} name={name} key={name} />);
					if (index < links.length - 1) {
						list.push(<div className='w-full h-0.5 rounded-lg bg-ctp-text' />);
					}
					return list;
				}, [])}
			</div>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);