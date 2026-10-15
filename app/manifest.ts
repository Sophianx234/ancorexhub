import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AncoreXHub | Software Engineering Studio",
    short_name: "AncoreXHub",
    description: "Transforming ideas into scalable digital reality with modern web and mobile engineering.",
    start_url: "/",
    display: "standalone",
    background_color: "#001514",
    theme_color: "#2563EB",
    icons: [
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logob.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
