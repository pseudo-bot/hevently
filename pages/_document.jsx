/* eslint-disable @next/next/google-font-display */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
				<link rel="icon" type="image/png" href="/icons/logo.png" />
					<link
						href="https://fonts.googleapis.com/css?family=Dancing+Script:regular,500,600,700"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Montserrat+Alternates:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css?family=Kalam:300,regular,700"
						rel="stylesheet"
					/>
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
