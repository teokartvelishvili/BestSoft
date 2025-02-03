const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

const sitemap = new SitemapStream({ hostname: "https://bestsoft.ge/" });

// აქ დაამატე ყველა გვერდი
sitemap.write({ url: "/", changefreq: "weekly", priority: 1.0 });
sitemap.write({ url: "/prices", changefreq: "weekly", priority: 0.9 });
sitemap.write({ url: "/Calculation", changefreq: "weekly", priority: 0.8 });

sitemap.write({ url: "/service", changefreq: "weekly", priority: 0.7 });
sitemap.write({ url: "/contact", changefreq: "monthly", priority: 0.6 });
sitemap.write({ url: "/about", changefreq: "monthly", priority: 0.5 }); // შენი მეოთხე გვერდი

sitemap.end();

streamToPromise(sitemap)
  .then((data) => {
    const filePath = path.join(__dirname, "../public/sitemap.xml");
    createWriteStream(filePath).write(data);
    console.log("✅ Sitemap.xml გენერირებულია!");
  })
  .catch((err) => console.error("❌ Sitemap გენერაციის შეცდომა:", err));
