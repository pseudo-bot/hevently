/* eslint-disable @next/next/google-font-display */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="icon" type="image/png" href="/icons/logo.png" />
					<link rel="preload" href="/api/venue/wedding" as="fetch" crossOrigin="anonymous" />
					<link rel="preload" href="/api/venue/birthday" as="fetch" crossOrigin="anonymous" />
					<link rel="preload" href="/api/venue/social" as="fetch" crossOrigin="anonymous" />
					<link rel="preload" href="/api/venue/corporate" as="fetch" crossOrigin="anonymous" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
