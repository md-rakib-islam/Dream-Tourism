// Import necessary constants and utilities
import {
  GET_CMS_BLOGS,
  GET_CONTENTS_WITH_URL_BY_MENU_ID,
} from "@/constant/constants";
import { slugify } from "@/utils/sluglify";

const BASE_URL = "https://dreamtourism.it";

export default async function Sitemap() {
  // Fetch content data based on homeId
  const contentRes = await fetch(`${GET_CONTENTS_WITH_URL_BY_MENU_ID}/1`);
  if (!contentRes.ok) {
    throw new Error(
      `Failed to fetch content data: ${contentRes.status} ${contentRes.statusText}`
    );
  }

  const contentData = await contentRes.json();

  // Ensure contentData is an array
  if (!Array.isArray(contentData)) {
    throw new TypeError("Content data is not an array");
  }
  const blogRes = await fetch(`${GET_CMS_BLOGS}`);
  if (!blogRes.ok) {
    throw new Error(
      `Failed to fetch content data: ${blogRes.status} ${blogRes.statusText}`
    );
  }

  const blogsData = await blogRes.json();

  // Ensure contentData is an array
  if (!Array.isArray(blogsData.blogs)) {
    throw new TypeError("Content data is not an array");
  }

  console.log("blogsData", blogsData.blogs);
  // Generate sitemap URLs
  const blogsXml = blogsData.blogs.map((item) => ({
    url: `${BASE_URL}/blog-details/${encodeURIComponent(item.title)}`, // Ensure names are URL-encoded
    lastModified: new Date(item.updated_at).toISOString(), // Use ISO string format for dates
    changeFrequency: "weekly",
    priority: 0.5,
  }));
  const contentsXml = contentData
    .filter(
      (item) =>
        item.name !== "Italy" &&
        item.name !== "United States" &&
        item.name !== "Netherlands" &&
        item.name !== "Switzerland" &&
        item.name !== "Germany" &&
        item.name !== "France" &&
        item.name !== "Belgium"
    )
    .map((item) => ({
      url: `${BASE_URL}/tour/${encodeURIComponent(slugify(item.name))}`, // Ensure names are URL-encoded
      lastModified: new Date(item.updated_at).toISOString(), // Use ISO string format for dates
      changeFrequency: "weekly",
      priority: 0.5,
    }));
  const combinedXml = contentsXml.concat(blogsXml);

  // Set the response headers to serve the XML
  // Set the response headers to serve the XML
  return combinedXml;
}
