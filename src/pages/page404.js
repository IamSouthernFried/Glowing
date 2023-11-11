import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Span, Input, Button, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				You choose are great vacation
			</title>
			<meta name={"description"} content={"Anyone can build a vacation, we build experiences"} />
			<meta property={"og:title"} content={"You choose are great vacation"} />
			<meta property={"og:description"} content={"Anyone can build a vacation, we build experiences"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/OGimage.png?v=2021-09-23T20:32:10.363Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/654ff629867c86001f17954a/images/apple-touch-icon.png?v=2023-11-11T21:47:03.909Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/654ff629867c86001f17954a/images/apple-touch-icon.png?v=2023-11-11T21:47:03.909Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/654ff629867c86001f17954a/images/apple-touch-icon.png?v=2023-11-11T21:47:03.909Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/654ff629867c86001f17954a/images/apple-touch-icon.png?v=2023-11-11T21:47:03.909Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/654ff629867c86001f17954a/images/apple-touch-icon.png?v=2023-11-11T21:47:03.909Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/654ff629867c86001f17954a/images/apple-touch-icon.png?v=2023-11-11T21:47:03.909Z"} />
			<meta name={"msapplication-TileColor"} content={"#ecffb5"} />
		</Helmet>
		<Section padding="18px 0 18px 0" quarkly-title="Header">
			<Override slot="SectionContent" flex-direction="row" align-items="center" justify-content="space-around" />
			<Image
				lg-max-width="150px"
				sm-width="50%"
				max-height="80px"
				src="https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/logo.svg?v=2021-09-23T21:07:52.037Z"
				width="25%"
				height="auto"
			/>
			<Components.QuarklycommunityKitMobileSidePanel width="50%">
				<Override slot="Button Text" lg-display="none" />
				<Override slot="Button Icon" size="32px" />
				<Box display="flex" justify-content="center" align-items="center" md-flex-direction="column">
					<Link
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
					>
						Service
					</Link>
					<Link
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
					>
						About
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
					>
						Advisors
					</Link>
					<Link
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						href="#"
					>
						Contact
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
			<Components.QuarklycommunityKitPopup md-display="none" width="25%" display="flex" justify-content="flex-end">
				<Override
					slot="Button Open"
					border-width="1px"
					border-color="--color-dark"
					background="rgba(0, 119, 204, 0)"
					color="--dark"
					lg-padding="13px 20px 13px 20px"
					width="180px"
					lg-margin="0px 16px 0px 0px"
					border-radius="10px"
					lg-width="150px"
					border-style="solid"
					font="normal 700 16px/1.5 --fontFamily-googleManrope"
					padding="13px 45px 13px 45px"
				>
					Order Now
				</Override>
				<Override
					slot="Wrapper"
					padding="32px 0px 0px 0px"
					max-width="700px"
					border-width="1px"
					border-style="solid"
					border-color="--color-grey"
					border-radius="10px"
				/>
				<Override slot="Button Close" size="36px" />
				<Box display="flex" flex-direction="column" padding="0px 16px 16px 16px">
					<Box padding="0px 16px 16px 16px">
						<Text margin="0px 0px 16px 0px" font="--headline3">
							Let's plan your next vacation
						</Text>
						<Text margin="0px 0px 48px 0px" font="--lead">
							Have a question about your future journey? Wondering about one of our destinations? Ask away! That’s what we’re here for.
						</Text>
						<Text margin="0px 0px 0px 0px" font="--headline4">
							Request details
						</Text>
					</Box>
					<Components.QuarklycommunityKitNetlifyForm display="flex" flex-wrap="wrap" width="100%" successMessage="Thanks for you reply">
						<Box display="flex" flex-wrap="wrap">
							<Box width="50%" display="flex" padding="16px 16px 16px 16px" flex-direction="column">
								<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
									First name{" "}
									<Span color="--green">
										*
									</Span>
								</Text>
								<Input
									placeholder="Bill"
									name="Name"
									type="text"
									border-color="--color-light"
									border-width="1px"
									border-radius="10px"
									required
									padding="14px 16px 14px 16px"
								/>
							</Box>
							<Box display="flex" padding="16px 16px 16px 16px" flex-direction="column" width="50%">
								<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
									Last name (optional)
								</Text>
								<Input
									border-radius="10px"
									name="Last name"
									padding="14px 16px 14px 16px"
									placeholder="Salliwan"
									type="text"
									border-color="--color-light"
									border-width="1px"
								/>
							</Box>
							<Box width="50%" display="flex" padding="16px 16px 16px 16px" flex-direction="column">
								<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
									Email address{"\n\n "}
									<Span
										text-overflow="clip"
										hyphens="manual"
										color="--green"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
									>
										*
									</Span>
								</Text>
								<Input
									border-color="--color-light"
									border-width="1px"
									border-radius="10px"
									required
									padding="14px 16px 14px 16px"
									placeholder="billslwn@mailbox.com"
									name="mail"
									type="email"
								/>
							</Box>
							<Box width="50%" display="flex" padding="16px 16px 16px 16px" flex-direction="column">
								<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
									Phone number (optional)
								</Text>
								<Input
									border-radius="10px"
									padding="14px 16px 14px 16px"
									placeholder="1 916 555-17-29"
									name="tel"
									type="tel"
									border-color="--color-light"
									border-width="1px"
								/>
							</Box>
							<Box
								padding="16px 16px 16px 16px"
								width="100%"
								display="flex"
								flex-direction="column"
								align-items="flex-start"
							>
								<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
									Phone number (optional)
								</Text>
								<Input
									type="text"
									border-width="1px"
									border-radius="10px"
									min-height="150px"
									padding="14px 16px 14px 16px"
									name="text"
									as="textarea"
									width="100%"
									placeholder="Enter your message here..."
									border-color="--color-light"
								/>
								<Text margin="8px 0px 32px 0px" font="--base" color="--grey">
									5000 characters left
								</Text>
								<Button
									background="--color-green"
									border-radius="10px"
									hover-opacity=".8"
									padding="12px 68px 12px 68px"
									font="--link"
								>
									Submit
								</Button>
							</Box>
						</Box>
					</Components.QuarklycommunityKitNetlifyForm>
				</Box>
			</Components.QuarklycommunityKitPopup>
		</Section>
		<Section padding="60px 0 60px 0" quarkly-title="HeroBlock">
			<Text
				margin="0px 0px 0px 0px"
				font="--headline1"
				color="--dark"
				lg-font="normal 800 40px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 800 28px/1.2 &quot;Manrope&quot;, sans-serif"
			>
				PAGE NOT FOUND{"\n\n"}
			</Text>
			<Image
				src="https://images.unsplash.com/photo-1529847425926-e4c872755a62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1035&q=80"
				width="100%"
				object-fit="cover"
				lg-max-height="300px"
				max-height="600px"
				object-position="0% 55%"
				md-max-height="200px"
				sm-max-height="150px"
				margin="32px 0px 0px 0px"
				srcSet="https://images.unsplash.com/photo-1529847425926-e4c872755a62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1529847425926-e4c872755a62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1529847425926-e4c872755a62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1529847425926-e4c872755a62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1529847425926-e4c872755a62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1529847425926-e4c872755a62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1529847425926-e4c872755a62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Text
				color="--dark"
				lg-font="normal 800 40px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 800 28px/1.2 &quot;Manrope&quot;, sans-serif"
				lg-margin="14px 0px 0px 0px"
				margin="34px 0px 0px 0px"
				font="--headline2"
			>
				<Span
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					color="--green"
					overflow-wrap="normal"
					word-break="normal"
				>
					Ooops!
				</Span>
				{" "}It’s 404. This page isn’t found.
			</Text>
		</Section>
		<Section padding="54px 0 30px 0" quarkly-title="Footer" lg-padding="30px 0 20px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				width="25%"
				md-align-items="center"
				sm-margin="0px 0px 16px 0px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				md-display="flex"
				md-justify-content="center"
				md-width="50%"
			>
				<Image src="https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/logo.svg?v=2021-09-23T21:07:52.037Z" width="248px" height="auto" max-width="100%" />
			</Box>
			<Box
				empty-min-width="64px"
				empty-border-style="solid"
				padding="16px 16px 16px 16px"
				width="25%"
				display="flex"
				flex-direction="column"
				md-width="50%"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
			>
				<Text font="--headline4" color="--dark" lg-font="600 24px/1.3 &quot;Manrope&quot;, sans-serif" margin="0px 0px 32px 0px">
					About
				</Text>
				<Link
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
				>
					Destinations
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					Newsroom
				</Link>
				<Link
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
				>
					Partners
				</Link>
				<Link
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
				>
					Carreers
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				flex-direction="column"
				md-width="50%"
				empty-min-width="64px"
				width="25%"
				display="flex"
			>
				<Text margin="0px 0px 32px 0px" font="--headline4" color="--dark" lg-font="600 24px/1.3 &quot;Manrope&quot;, sans-serif">
					Other
				</Text>
				<Link
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
				>
					Terms & Conditions
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					Privacy center
				</Link>
				<Link
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
				>
					Accessibility policy
				</Link>
				<Link
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
				>
					Cookie policy
				</Link>
			</Box>
			<Box
				md-width="50%"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				display="flex"
				flex-direction="column"
				empty-min-height="64px"
				padding="16px 16px 16px 16px"
				width="25%"
			>
				<Text margin="0px 0px 32px 0px" font="--headline4" color="--dark" lg-font="600 24px/1.3 &quot;Manrope&quot;, sans-serif">
					Contacts
				</Text>
				<Link
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="tel:123456789"
					text-decoration-line="initial"
					color="--dark"
				>
					1 (916) 684-4294
				</Link>
				<Link
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="mailto:mail@gmail.com"
				>
					sale@fantastico.com
				</Link>
				<Link
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					5121 Laguna Woods Dr, Elk Grove, CA, 95758{"  "}
				</Link>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"614ce40335c5c8001f7746de"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});