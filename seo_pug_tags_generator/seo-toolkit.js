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
    code.innerHTML = `title ${title.value}\nlink(rel="canonical" href="${protocol.value}://${prefix.value}${domain.value}/${slug.value}")\nmeta(name='robots' content='${robots.value}')\nmeta(name="description" content="${description.value}")\nmeta(name="google" content="nositelinkssearchbox")\nmeta(name="image" content="${protocol.value}://${prefix.value}${domain.value}/${image.value}")\nmeta(name='language' content='${language.value}')\nmeta(http-equiv='content-language' content='${language.value}')\nmeta(http-equiv="Content-Type" content="text/html; charset=UTF-8")\nmeta(itemprop="name" content="${name.value}")\nmeta(itemprop="description" content="${description.value}")\nmeta(itemprop="image" content="${protocol.value}://${prefix.value}${domain.value}/${image.value}")\nmeta(name="og:title" content="${title.value}")\nmeta(name="og:description" content="${description.value}")\nmeta(name="og:image" content="${protocol.value}://${prefix.value}${domain.value}/${image.value}")\nmeta(property="og:image:secure_url" content="${protocol.value}://${prefix.value}${domain.value}/${image.value}")\nmeta(name="og:url" content="${protocol.value}://${prefix.value}${domain.value}")\nmeta(name="og:site_name" content="${name.value}")\nmeta(name="og:locale" content="${locale.value}")\nmeta(name="og:type" content="${category.value}")\nmeta(name="twitter:card" content="summary_large_image")\nmeta(name="twitter:description" content="${description.value}")\nmeta(name="twitter:title" content="${title.value}")\nmeta(name="twitter:image" content="${image.value}")`
});