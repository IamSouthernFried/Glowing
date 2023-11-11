import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Span, Input, Button, Section, Em, Icon, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { IoMdArrowUp } from "react-icons/io";
import { FaInstagram, FaDiscord, FaTwitterSquare, FaPinterest, FaYoutube } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
			<Override slot="SectionContent" justify-content="space-around" flex-direction="row" align-items="center" />
			<Image
				max-height="80px"
				src="https://uploads.quarkly.io/654ff629867c86001f17954a/images/apple-touch-icon.png?v=2023-11-11T21:47:03.909Z"
				width="25%"
				height="auto"
				lg-max-width="150px"
				sm-width="50%"
				srcSet="https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/apple-touch-icon.png?v=2023-11-11T21%3A47%3A03.909Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/apple-touch-icon.png?v=2023-11-11T21%3A47%3A03.909Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/apple-touch-icon.png?v=2023-11-11T21%3A47%3A03.909Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/apple-touch-icon.png?v=2023-11-11T21%3A47%3A03.909Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/apple-touch-icon.png?v=2023-11-11T21%3A47%3A03.909Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/apple-touch-icon.png?v=2023-11-11T21%3A47%3A03.909Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/apple-touch-icon.png?v=2023-11-11T21%3A47%3A03.909Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Components.QuarklycommunityKitMobileSidePanel width="50%">
				<Override slot="Button Text" lg-display="none" />
				<Override slot="Button Icon" size="32px" />
				<Box display="flex" justify-content="center" align-items="center" md-flex-direction="column">
					<Link
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
					>
						Home
					</Link>
					<Link
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
					>
						About
					</Link>
					<Link
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
					>
						Blog
					</Link>
					<Link
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						lg-margin="0px 6px 0px 6px"
						href="#"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
					>
						Contact
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
			<Components.QuarklycommunityKitPopup display="flex" justify-content="flex-end" md-display="none" width="25%">
				<Override
					slot="Button Open"
					lg-padding="13px 20px 13px 20px"
					width="180px"
					lg-margin="0px 16px 0px 0px"
					border-radius="10px"
					border-width="1px"
					background="rgba(0, 119, 204, 0)"
					color="--dark"
					font="normal 700 16px/1.5 --fontFamily-googleManrope"
					padding="13px 45px 13px 45px"
					border-style="solid"
					border-color="--color-dark"
					lg-width="150px"
				>
					MINTING NOW
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
				<Box padding="0px 16px 16px 16px" display="flex" flex-direction="column">
					<Box padding="0px 16px 16px 16px">
						<Text margin="0px 0px 16px 0px" font="--headline3">
							Let's plan your next vacation
						</Text>
						<Text margin="0px 0px 48px 0px" font="--lead">
							Have a question about your future journey? Wondering about one of our destinations? Ask away! That’s what we’re here for.
						</Text>
						<Text font="--headline4" margin="0px 0px 0px 0px">
							Request details
						</Text>
					</Box>
					<Components.QuarklycommunityKitNetlifyForm display="flex" flex-wrap="wrap" width="100%" successMessage="Thanks for you reply">
						<Box flex-wrap="wrap" display="flex">
							<Box width="50%" display="flex" padding="16px 16px 16px 16px" flex-direction="column">
								<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
									First name{" "}
									<Span color="--green">
										*
									</Span>
								</Text>
								<Input
									border-color="--color-light"
									border-width="1px"
									border-radius="10px"
									required
									padding="14px 16px 14px 16px"
									placeholder="Bill"
									name="Name"
									type="text"
								/>
							</Box>
							<Box width="50%" display="flex" padding="16px 16px 16px 16px" flex-direction="column">
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
							<Box flex-direction="column" width="50%" display="flex" padding="16px 16px 16px 16px">
								<Text font="600 24px/1.3 --fontFamily-googleManrope" margin="0px 0px 8px 0px">
									Email address{"\n\n "}
									<Span
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										color="--green"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
									>
										*
									</Span>
								</Text>
								<Input
									padding="14px 16px 14px 16px"
									placeholder="billslwn@mailbox.com"
									name="mail"
									type="email"
									border-color="--color-light"
									border-width="1px"
									border-radius="10px"
									required
								/>
							</Box>
							<Box width="50%" display="flex" padding="16px 16px 16px 16px" flex-direction="column">
								<Text margin="0px 0px 8px 0px" font="600 24px/1.3 --fontFamily-googleManrope">
									Phone number (optional)
								</Text>
								<Input
									name="tel"
									type="tel"
									border-color="--color-light"
									border-width="1px"
									border-radius="10px"
									padding="14px 16px 14px 16px"
									placeholder="1 916 555-17-29"
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
									width="100%"
									placeholder="Enter your message here..."
									name="text"
									border-width="1px"
									border-radius="10px"
									as="textarea"
									min-height="150px"
									padding="14px 16px 14px 16px"
									border-color="--color-light"
								/>
								<Text margin="8px 0px 32px 0px" font="--base" color="--grey">
									5000 characters left
								</Text>
								<Button
									padding="12px 68px 12px 68px"
									font="--link"
									background="--color-green"
									border-radius="10px"
									hover-opacity=".8"
								>
									Submit
								</Button>
							</Box>
						</Box>
					</Components.QuarklycommunityKitNetlifyForm>
				</Box>
			</Components.QuarklycommunityKitPopup>
		</Section>
		<Section padding="54px 0 74px 0" md-padding="30px 0 30px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Section padding="60px 0 20px 0" quarkly-title="HeroBlock">
				<Image src="https://uploads.quarkly.io/654ff629867c86001f17954a/images/SDXL_09_A_mixed_media_dreamlike_landscape_masterpiece_stretche_1.jpg?v=2023-11-11T21:58:38.786Z" display="block" srcSet="https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/SDXL_09_A_mixed_media_dreamlike_landscape_masterpiece_stretche_1.jpg?v=2023-11-11T21%3A58%3A38.786Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/SDXL_09_A_mixed_media_dreamlike_landscape_masterpiece_stretche_1.jpg?v=2023-11-11T21%3A58%3A38.786Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/SDXL_09_A_mixed_media_dreamlike_landscape_masterpiece_stretche_1.jpg?v=2023-11-11T21%3A58%3A38.786Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/SDXL_09_A_mixed_media_dreamlike_landscape_masterpiece_stretche_1.jpg?v=2023-11-11T21%3A58%3A38.786Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/SDXL_09_A_mixed_media_dreamlike_landscape_masterpiece_stretche_1.jpg?v=2023-11-11T21%3A58%3A38.786Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/SDXL_09_A_mixed_media_dreamlike_landscape_masterpiece_stretche_1.jpg?v=2023-11-11T21%3A58%3A38.786Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/SDXL_09_A_mixed_media_dreamlike_landscape_masterpiece_stretche_1.jpg?v=2023-11-11T21%3A58%3A38.786Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw" />
				<Text
					color="--dark"
					lg-font="normal 800 40px/1.2 &quot;Manrope&quot;, sans-serif"
					md-font="normal 800 28px/1.2 &quot;Manrope&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					font="--headline1"
					lg-border-color="#e617df"
					lg-position="static"
					lg-flex="0 1 auto"
				>
					<Em lg-display="inline" lg-color="#171058">
						SouthernFried
						<br />
						{"          "}Artist
					</Em>
				</Text>
				<Text margin="0px 0px 0px 0px">
					Ive been a web 3 artist since 2019.{" "}
				</Text>
			</Section>
			<Box
				md-width="50%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="30%"
				padding="0px 16px 0px 0px"
			>
				<Image
					width="100%"
					max-width="400px"
					lg-min-height="300px"
					sm-min-height="188px"
					src="https://uploads.quarkly.io/654ff629867c86001f17954a/images/3.png?v=2023-11-11T22:14:54.035Z"
					min-height="600px"
					object-fit="cover"
					object-position="40% 0%"
					srcSet="https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/3.png?v=2023-11-11T22%3A14%3A54.035Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/3.png?v=2023-11-11T22%3A14%3A54.035Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/3.png?v=2023-11-11T22%3A14%3A54.035Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/3.png?v=2023-11-11T22%3A14%3A54.035Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/3.png?v=2023-11-11T22%3A14%3A54.035Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/3.png?v=2023-11-11T22%3A14%3A54.035Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/3.png?v=2023-11-11T22%3A14%3A54.035Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					margin="16px 0px 16px 0px"
					font="--headline4"
					lg-font="600 18PX/1.3 &quot;Manrope&quot;, sans-serif"
					md-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif"
					md-margin="8px 0px 0px 0px"
				>
					Flower Orb
				</Text>
			</Box>
			<Box
				width="70%"
				padding="0px 0px 0px 16px"
				md-width="50%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
			>
				<Image
					object-fit="cover"
					width="100%"
					lg-min-height="390px"
					sm-min-height="221px"
					src="https://uploads.quarkly.io/654ff629867c86001f17954a/images/DreamShaper_v7_a_group_of_people_sitting_in_chairs_on_a_beach_1.jpg?v=2023-11-11T22:15:26.874Z"
					min-height="778px"
					srcSet="https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/DreamShaper_v7_a_group_of_people_sitting_in_chairs_on_a_beach_1.jpg?v=2023-11-11T22%3A15%3A26.874Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/DreamShaper_v7_a_group_of_people_sitting_in_chairs_on_a_beach_1.jpg?v=2023-11-11T22%3A15%3A26.874Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/DreamShaper_v7_a_group_of_people_sitting_in_chairs_on_a_beach_1.jpg?v=2023-11-11T22%3A15%3A26.874Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/DreamShaper_v7_a_group_of_people_sitting_in_chairs_on_a_beach_1.jpg?v=2023-11-11T22%3A15%3A26.874Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/DreamShaper_v7_a_group_of_people_sitting_in_chairs_on_a_beach_1.jpg?v=2023-11-11T22%3A15%3A26.874Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/DreamShaper_v7_a_group_of_people_sitting_in_chairs_on_a_beach_1.jpg?v=2023-11-11T22%3A15%3A26.874Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/DreamShaper_v7_a_group_of_people_sitting_in_chairs_on_a_beach_1.jpg?v=2023-11-11T22%3A15%3A26.874Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					margin="16px 0px 16px 0px"
					font="--headline4"
					lg-font="600 18PX/1.3 &quot;Manrope&quot;, sans-serif"
					md-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif"
					md-margin="8px 0px 0px 0px"
				>
					Retrofuturistic
				</Text>
			</Box>
			<Box
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				padding="32px 16px 0px 0px"
				width="33.333%"
				md-width="50%"
				empty-min-width="64px"
				empty-min-height="64px"
			>
				<Image
					min-height="544px"
					object-fit="cover"
					object-position="40% 0%"
					width="100%"
					max-width="400px"
					lg-min-height="272px"
					sm-min-height="221px"
					src="https://uploads.quarkly.io/654ff629867c86001f17954a/images/sfglitch.png?v=2023-11-11T22:18:53.490Z"
					srcSet="https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/sfglitch.png?v=2023-11-11T22%3A18%3A53.490Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/sfglitch.png?v=2023-11-11T22%3A18%3A53.490Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/sfglitch.png?v=2023-11-11T22%3A18%3A53.490Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/sfglitch.png?v=2023-11-11T22%3A18%3A53.490Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/sfglitch.png?v=2023-11-11T22%3A18%3A53.490Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/sfglitch.png?v=2023-11-11T22%3A18%3A53.490Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/sfglitch.png?v=2023-11-11T22%3A18%3A53.490Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					md-margin="8px 0px 0px 0px"
					margin="16px 0px 0px 0px"
					font="--headline4"
					lg-font="600 18PX/1.3 &quot;Manrope&quot;, sans-serif"
					md-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif"
				>
					Glitch Art
				</Text>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="33.333%"
				empty-min-width="64px"
				padding="32px 16px 0px 16px"
				md-width="50%"
				md-padding="32px 0px 0px 16px"
			>
				<Image
					lg-min-height="177px"
					src="https://uploads.quarkly.io/654ff629867c86001f17954a/images/F0FXHVxWAAAEfYv.jpg?v=2023-11-11T22:18:00.964Z"
					min-height="353px"
					object-fit="cover"
					object-position="40% 0%"
					width="100%"
					max-width="400px"
					srcSet="https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/F0FXHVxWAAAEfYv.jpg?v=2023-11-11T22%3A18%3A00.964Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/F0FXHVxWAAAEfYv.jpg?v=2023-11-11T22%3A18%3A00.964Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/F0FXHVxWAAAEfYv.jpg?v=2023-11-11T22%3A18%3A00.964Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/F0FXHVxWAAAEfYv.jpg?v=2023-11-11T22%3A18%3A00.964Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/F0FXHVxWAAAEfYv.jpg?v=2023-11-11T22%3A18%3A00.964Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/F0FXHVxWAAAEfYv.jpg?v=2023-11-11T22%3A18%3A00.964Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/F0FXHVxWAAAEfYv.jpg?v=2023-11-11T22%3A18%3A00.964Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					width="100%"
					lg-font="600 18PX/1.3 &quot;Manrope&quot;, sans-serif"
					md-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif"
					md-margin="8px 0px 0px 0px"
					margin="16px 0px 0px 0px"
					font="--headline4"
				>
					Charity Events
				</Text>
			</Box>
			<Box
				width="33.333%"
				padding="32px 0px 0px 16px"
				md-padding="32px 0px 0px 0px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				empty-border-style="solid"
			>
				<Image
					min-height="450px"
					object-fit="cover"
					object-position="40% 0%"
					src="https://uploads.quarkly.io/654ff629867c86001f17954a/images/music.png?v=2023-11-11T22:17:20.933Z"
					width="100%"
					max-width="400px"
					lg-min-height="225px"
					md-max-width="none"
					md-max-height="325px"
					sm-max-height="188px"
					srcSet="https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/music.png?v=2023-11-11T22%3A17%3A20.933Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/music.png?v=2023-11-11T22%3A17%3A20.933Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/music.png?v=2023-11-11T22%3A17%3A20.933Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/music.png?v=2023-11-11T22%3A17%3A20.933Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/music.png?v=2023-11-11T22%3A17%3A20.933Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/music.png?v=2023-11-11T22%3A17%3A20.933Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/music.png?v=2023-11-11T22%3A17%3A20.933Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Text
					md-margin="8px 0px 0px 0px"
					margin="16px 0px 0px 0px"
					font="--headline4"
					lg-font="600 18PX/1.3 &quot;Manrope&quot;, sans-serif"
					md-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif"
				>
					Collage Art
				</Text>
			</Box>
		</Section>
		<Section padding="70px 0 30px 0" lg-padding="30px 0 30px 0">
			<Text
				margin="0px 0px 18px 0px"
				font="--headline2"
				color="--dark"
				lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
				md-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
			>
				Blog
			</Text>
			<LinkBox
				align-items="flex-start"
				border-width="1px"
				margin="30px 0px 0px 0px"
				md-padding="8px 8px 40px 8px"
				md-flex-wrap="wrap"
				width="100%"
				display="flex"
				padding="32px 32px 32px 32px"
				border-color="--color-light"
				border-style="solid"
				lg-padding="16px 16px 16px 16px"
				md-position="relative"
				flex-direction="row"
			>
				<Box
					height="100%"
					display="flex"
					justify-content="space-between"
					md-height="auto"
					md-margin="0px 0px 16px 0px"
					width="65%"
					flex-direction="column"
					align-items="flex-start"
					padding="0px 0px 0px 0px"
					lg-width="50%"
					md-width="100%"
				>
					<Box lg-width="90%" width="75%">
						<Text
							lg-font="normal 500 12px/1.5 &quot;Manrope&quot;, sans-serif"
							lg-margin="0px 0px 16px 0px"
							margin="0px 0px 32px 0px"
							font="--base"
							color="--grey"
							text-transform="uppercase"
						>
							By SouthernFried
						</Text>
						<Text
							lg-font="600 18px/1.3 &quot;Manrope&quot;, sans-serif"
							margin="0px 0px 16px 0px"
							font="--headline4"
							color="--dark"
							width="90%"
						>
							Vavortex Weekly X Space Begins
						</Text>
						<Text margin="0px 0px 16px 0px" font="--lead" color="--dark" lg-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif">
							Our AI Community, Vertikal Ai Vortex (VaV) will begin our weekly community X spaces on Wednesday, 11-15-2023. The time is 8am EST | 2pm CET. I will be hosting along side Lordiiip. He is our featured artist of the week as well as our newest addition to our team. We will have special guests Choice, Layerr protocol and Alana Magazine to speak about our co colaboration for Pride Milan. Also we will have Paladin punks to speak about our newest open call, DNA moon, and Linked by Art to talk with us about our AI Evolution FND World!
						</Text>
					</Box>
					<Box
						color="--dark"
						hover-opacity=".8"
						md-position="absolute"
						md-bottom="8px"
						display="flex"
						align-items="center"
						flex-direction="row"
						justify-content="flex-start"
					>
						<Text margin="0px 8px 0px 0px" font="--link" color="inherit" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif">
							Read article
						</Text>
						<Icon
							category="io"
							icon={IoMdArrowUp}
							color="inherit"
							transform="rotate(45deg)"
							margin="1px 0px 0px 0px"
						/>
					</Box>
				</Box>
				<Box width="35%" display="flex" lg-width="50%" md-width="100%">
					<Image
						min-height="336px"
						object-fit="cover"
						md-max-height="250px"
						md-min-height="16px"
						sm-height="200px"
						width="100%"
						src="https://uploads.quarkly.io/654ff629867c86001f17954a/images/VAVoPUNK_SF.jpg?v=2023-11-11T22:29:58.010Z"
						srcSet="https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/VAVoPUNK_SF.jpg?v=2023-11-11T22%3A29%3A58.010Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/VAVoPUNK_SF.jpg?v=2023-11-11T22%3A29%3A58.010Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/VAVoPUNK_SF.jpg?v=2023-11-11T22%3A29%3A58.010Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/VAVoPUNK_SF.jpg?v=2023-11-11T22%3A29%3A58.010Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/VAVoPUNK_SF.jpg?v=2023-11-11T22%3A29%3A58.010Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/VAVoPUNK_SF.jpg?v=2023-11-11T22%3A29%3A58.010Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/654ff629867c86001f17954a/images/VAVoPUNK_SF.jpg?v=2023-11-11T22%3A29%3A58.010Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</LinkBox>
			<Components.QuarklycommunityKitCollapse border-width="0px" margin="30px 0px 0px 0px" padding="0px 0px 0px 0px">
				<Override slot="Content" display="flex" flex-wrap="wrap" />
				<Override
					slot="Button"
					padding="74px 24px 8px 24px"
					lg-font="600 24px/1.3 &quot;Manrope&quot;, sans-serif"
					lg-background="--color-white url(https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/find_replace.svg?v=2021-09-24T01:44:52.463Z) center top/34px no-repeat"
					lg-padding="34px 24px 8px 24px"
					width="100%"
					font="--headline4"
					color="--dark"
					background="--color-white url(https://uploads.quarkly.io/614ce40335c5c8001f7746e0/images/find_replace.svg?v=2021-09-24T01:44:52.463Z) center top/64px no-repeat"
				>
					Show all articles
				</Override>
				<LinkBox
					md-position="relative"
					md-flex-wrap="wrap"
					display="flex"
					margin="0px 0px 32px 0px"
					border-width="1px"
					lg-padding="16px 16px 16px 16px"
					md-padding="8px 8px 40px 8px"
					width="100%"
					padding="32px 32px 32px 32px"
					border-style="solid"
					md-margin="0px 0px 16px 0px"
					align-items="flex-start"
					flex-direction="row"
					border-color="--color-light"
				>
					<Box
						width="65%"
						display="flex"
						flex-direction="column"
						justify-content="space-between"
						lg-width="50%"
						md-margin="0px 0px 16px 0px"
						height="100%"
						align-items="flex-start"
						padding="0px 0px 0px 0px"
						md-width="100%"
						md-height="auto"
					>
						<Box width="75%" lg-width="90%">
							<Text
								text-transform="uppercase"
								lg-font="normal 500 12px/1.5 &quot;Manrope&quot;, sans-serif"
								lg-margin="0px 0px 16px 0px"
								margin="0px 0px 32px 0px"
								font="--base"
								color="--grey"
							>
								4d ago by PAIGE MCCLANAHAN
							</Text>
							<Text
								lg-font="600 18px/1.3 &quot;Manrope&quot;, sans-serif"
								margin="0px 0px 16px 0px"
								font="--headline4"
								color="--dark"
								width="90%"
							>
								Barcelona Takes on Airbnb
							</Text>
							<Text margin="0px 0px 0px 0px" font="--lead" color="--dark" lg-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif">
								A new rule, the only one of its kind in a major European city, forbids short-term private-room rentals, adding fuel to the debate over how to control booming prepandemic tourism.
							</Text>
						</Box>
						<Box
							hover-opacity=".8"
							md-position="absolute"
							md-bottom="8px"
							display="flex"
							align-items="center"
							flex-direction="row"
							justify-content="flex-start"
							color="--dark"
						>
							<Text margin="0px 8px 0px 0px" font="--link" color="inherit" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif">
								Read article
							</Text>
							<Icon
								category="io"
								icon={IoMdArrowUp}
								color="inherit"
								transform="rotate(45deg)"
								margin="1px 0px 0px 0px"
							/>
						</Box>
					</Box>
					<Box lg-width="50%" md-width="100%" width="35%" display="flex">
						<Image
							md-max-height="250px"
							md-min-height="16px"
							sm-height="200px"
							width="100%"
							src="https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
							min-height="336px"
							object-fit="cover"
							srcSet="https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1533990805250-e13bd50e5124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
				</LinkBox>
				<LinkBox
					padding="32px 32px 32px 32px"
					flex-direction="row"
					display="flex"
					margin="0px 0px 0px 0px"
					border-color="--color-light"
					lg-padding="16px 16px 16px 16px"
					md-flex-wrap="wrap"
					width="100%"
					align-items="flex-start"
					border-width="1px"
					md-padding="8px 8px 40px 8px"
					border-style="solid"
					md-margin="0px 0px 16px 0px"
					md-position="relative"
				>
					<Box
						align-items="flex-start"
						padding="0px 0px 0px 0px"
						md-height="auto"
						md-margin="0px 0px 16px 0px"
						width="65%"
						height="100%"
						flex-direction="column"
						justify-content="space-between"
						display="flex"
						lg-width="50%"
						md-width="100%"
					>
						<Box width="75%" lg-width="90%">
							<Text
								margin="0px 0px 32px 0px"
								font="--base"
								color="--grey"
								text-transform="uppercase"
								lg-font="normal 500 12px/1.5 &quot;Manrope&quot;, sans-serif"
								lg-margin="0px 0px 16px 0px"
							>
								4d ago by KENNETH CHANG
							</Text>
							<Text
								width="90%"
								lg-font="600 18px/1.3 &quot;Manrope&quot;, sans-serif"
								margin="0px 0px 16px 0px"
								font="--headline4"
								color="--dark"
							>
								Inspiration4 Astronauts Beam After Return From 3-Day Journey to Orbit
							</Text>
							<Text margin="0px 0px 0px 0px" font="--lead" color="--dark" lg-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif">
								The mission hinted at what space travel could look like in a more accessible future, while remaining in reach now to only the richest of the rich.
							</Text>
						</Box>
						<Box
							md-position="absolute"
							md-bottom="8px"
							display="flex"
							align-items="center"
							flex-direction="row"
							justify-content="flex-start"
							color="--dark"
							hover-opacity=".8"
						>
							<Text lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif" margin="0px 8px 0px 0px" font="--link" color="inherit">
								Read article
							</Text>
							<Icon
								icon={IoMdArrowUp}
								color="inherit"
								transform="rotate(45deg)"
								margin="1px 0px 0px 0px"
								category="io"
							/>
						</Box>
					</Box>
					<Box md-width="100%" width="35%" display="flex" lg-width="50%">
						<Image
							src="https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
							min-height="336px"
							object-fit="cover"
							max-height="336px"
							md-max-height="250px"
							md-min-height="16px"
							sm-height="200px"
							width="100%"
							srcSet="https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3200&q=80 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
					</Box>
				</LinkBox>
			</Components.QuarklycommunityKitCollapse>
		</Section>
		<Section padding="50px 0 50px 0" quarkly-title="Footer-2">
			<Box display="flex" justify-content="space-between" sm-flex-direction="column">
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="#5a5d64"
					sm-margin="0px 0px 15px 0px"
					sm-text-align="center"
				>
					© 2023 SouthernFried All rights reserved.
				</Text>
				<Box display="grid" grid-template-columns="repeat(5, 1fr)" grid-gap="16px 24px" sm-align-self="center">
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaInstagram}
							size="24px"
							color="#5a5d64"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaDiscord}
							size="24px"
							color="#5a5d64"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaTwitterSquare}
							size="24px"
							color="#5a5d64"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaPinterest}
							size="24px"
							color="#5a5d64"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaYoutube}
							size="24px"
							color="#5a5d64"
							hover-color="--dark"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
				</Box>
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