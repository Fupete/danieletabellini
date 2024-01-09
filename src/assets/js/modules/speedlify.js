// const CacheAsset = require("@11ty/eleventy-cache-assets");

export default async function() {
	let url = "https://iridescent-squirrel-c9bbac.netlify.app/api/urls.json";
	let json = await EleventyFetch(url, {
		duration: "1d",
		type: "json",
	});

	return json;
};