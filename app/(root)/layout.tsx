export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			SIEBAR
			{children}
		</main>
	);
}
