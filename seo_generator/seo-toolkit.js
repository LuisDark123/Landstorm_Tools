const title = document.getElementById('input-title');
const slug = document.getElementById('input-slug');
const description = document.getElementById('input-description');
const name = document.getElementById('input-name');
const image = document.getElementById('input-image');
const domain = document.getElementById('input-domain');
const protocol = document.getElementById('input-protocol');
const prefix = document.getElementById('input-prefix');
const category = document.getElementById('input-category');
const locale = document.getElementById('input-locale');
const robots = document.getElementById('input-robots');
const language = document.getElementById('input-language');

const generator = document.getElementById('btn-generator');
const code = document.getElementById('code');

generator.addEventListener('click', () => {
    code.innerHTML = `<title>${title.value}</title>\n<link rel="canonical" href="${protocol.value}://${prefix.value}${domain.value}/${slug.value}" />\n<meta name='robots' content='${robots.value}'>\n<meta name="description" content="${description.value}" />\n<meta name="google" content="nositelinkssearchbox" />\n<meta name="image" content="${protocol.value}://${prefix.value}${domain.value}/${image.value}" />\n<meta name='language' content='${language.value}'>\n<meta http-equiv='content-language' content='${language.value}'>\n<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n<meta itemprop="name" content="${name.value}">\n<meta itemprop="description" content="${description.value}" />\n<meta itemprop="image" content="${protocol.value}://${prefix.value}${domain.value}/${image.value}" />\n<meta name="og:title" content="${title.value}" />\n<meta name="og:description" content="${description.value}" />\n<meta name="og:image" content="${protocol.value}://${prefix.value}${domain.value}/${image.value}" />\n<meta property="og:image:secure_url" content="${protocol.value}://${prefix.value}${domain.value}/${image.value}" />\n<meta name="og:url" content="${protocol.value}://${prefix.value}${domain.value}" />\n<meta name="og:site_name" content="${name.value}" />\n<meta name="og:locale" content="${locale.value}" />\n<meta name="og:type" content="${category.value}" />\n<meta name="twitter:card" content="summary_large_image" />\n<meta name="twitter:description" content="${description.value}" />\n<meta name="twitter:title" content="${title.value}" />\n<meta name="twitter:image" content="${image.value}" />`
});