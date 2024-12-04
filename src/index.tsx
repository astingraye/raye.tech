import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const links = Object.entries({
	Github: 'https://github.com/astingraye',
	Discord: 'https://discord.com/users/1298435571395330108',
	Bluesky: 'https://bsky.app/profile/stingraye.bsky.social',
	...(/iphone|ipod|android|webos|blackberry|iemobile|opera mini/.test(navigator.userAgent.toLowerCase()) ? {} : {Stack: 'page(stack)'}),
});

function makeColorList(prefix: string) {
	return [
		`${prefix}-ctp-rosewater`,
		`${prefix}-ctp-flamingo`,
		`${prefix}-ctp-pink`,
		`${prefix}-ctp-mauve`,
		`${prefix}-ctp-red`,
		`${prefix}-ctp-maroon`,
		`${prefix}-ctp-peach`,
		`${prefix}-ctp-yellow`,
		`${prefix}-ctp-green`,
		`${prefix}-ctp-teal`,
		`${prefix}-ctp-sky`,
		`${prefix}-ctp-sapphire`,
		`${prefix}-ctp-blue`,
		`${prefix}-ctp-lavender`,
	];
}

async function getAppIcon(name: string, customIcon?: string): Promise<string> {
	const response = await fetch(
		`https://api.iconify.design/${customIcon ? 'carbon' : 'simple-icons'}/${
			customIcon ?? name.toLowerCase()
		}.svg`
	).then((e) => e.text());

	if(response === "Not found") return getAppIcon("", "unknown-filled");

	return response;
}

function AppIcon({
	name,
	index,
	href,
	customIcon,
}: {
	name: string;
	index: number;
	href: string;
	customIcon?: string;
}) {
	const [icon, setIcon] = useState('');

	const colourList = makeColorList('fill');

	useEffect(() => {
		async function getIcon() {
			const iconData = (await getAppIcon(name, customIcon))
				.replaceAll('fill="currentColor"', ``)
				.replace(
					`width="1em" height="1em"`,
					`class="h-full w-full ${
						colourList[index % colourList.length]
					}"`
				);

			console.log(iconData);

			setIcon(iconData);
		}

		getIcon();
	}, []);

	return (
		<div
			className="aspect-square p-4 pl-6 pr-6 bg-ctp-mantle rounded-lg flex flex-col justify-center items-center gap-4 cursor-pointer"
			onClick={() => {
				window.open(href, '_blank');
			}}
		>
			<div
				className="w-full h-full"
				dangerouslySetInnerHTML={{ __html: icon }}
			/>
			<h1 className="text-ctp-text text-2xl">{name}</h1>
		</div>
	);
}

function App() {
	const pages = {
		home: () => {
			return (
				<div className="scale-[3] lg:scale-[1.75] gap-3 flex flex-col">
					{links.reduce((list, [name, url], index) => {
						console.log(index);
						list.push(
							<h1
								className={`${
									makeColorList('text')[index]
								} cursor-pointer text-3xl `}
								rel="noopener noreferrer"
								onClick={() => {
									const tryMatchSetPage = /page\((.*)\)/.exec(
										url
									)?.[1];

									if (tryMatchSetPage) {
										setPage(tryMatchSetPage);
									} else {
										window.open(url, '_blank');
									}
								}}
							>
								{name}
							</h1>
						);
						if (index < links.length - 1) {
							list.push(
								<div
									className="w-full h-0.5 rounded-lg bg-ctp-text"
									style={{ transform: 'scaleX(1.25)' }}
								/>
							);
						}
						return list;
					}, [])}
				</div>
			);
		},
		stack: () => {
			const services: {
				[key: string]: { url: string; customIcon?: string };
			} = {
				Jellyfin: {
					url: 'https://jellyfin.org/',
				},
				Radarr: {
					url: 'https://radarr.video/',
				},
				Sonarr: {
					url: 'https://sonarr.tv/',
				},
				Bazarr: {
					url: "https://www.bazarr.media/",
					customIcon: "closed-caption-alt"
				},
				qBittorrent: {
					url: "https://www.qbittorrent.org/"
				},
				Unmanic: {
					url: 'https://docs.unmanic.app/',
					customIcon: 'media-library-filled',
				},
				MySpeed: {
					url: 'https://github.com/gnmyt/myspeed',
					customIcon: 'content-delivery-network',
				},
				ByteStash: {
					url: 'https://github.com/jordan-dalby/ByteStash',
					customIcon: 'code',
				},
			};

			return (
				<div className="w-1/2 h-fit p-4 flex flex-col justify-center items-center">
					<h1 className="text-ctp-text text-3xl mb-8 flex flex-row items-center max-w-fit">
						Selfhosted Stack (
						<h1
							className="text-ctp-mauve cursor-pointer"
							onClick={() => setPage('home')}
						>
							Back
						</h1>
						)
					</h1>
					<div className="w-full h-full flex flex-row flex-wrap gap-4 justify-center items-center">
						{Object.entries(services).map(
							(
								[key, value]: [
									key: string,
									value: { url: string; customIcon?: string }
								],
								index
							) => (
								<div className="w-1/5">
									<AppIcon
										name={key}
										href={value.url}
										{...(value?.customIcon
											? { customIcon: value.customIcon }
											: {})}
										index={index}
									/>
								</div>
							)
						)}
					</div>
				</div>
			);
		},
	};

	const [page, setPage] = useState(Object.keys(pages)[0]);

	return (
		<div className="bg-ctp-base w-screen h-screen p-5 flex flex-col text-center justify-center items-center select-none">
			{pages[page]()}
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
