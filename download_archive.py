import requests
from bs4 import BeautifulSoup
import json
from pathlib import Path

# The specific snapshot you want
archive_url = "https://web.archive.org/web/20190523195903/http://hgaegitim.com/"

print(f"Downloading: {archive_url}")
response = requests.get(archive_url)

# Save raw HTML
Path("hgaegitim_2019").mkdir(exist_ok=True)
Path("hgaegitim_2019/original.html").write_bytes(response.content)

# Parse
soup = BeautifulSoup(response.content, 'html.parser')

# Remove Wayback Machine toolbar
for elem in soup.find_all(id='wm-ipp-base'):
    elem.decompose()

# Extract structured data
site_data = {
    'meta': {
        'title': soup.title.string if soup.title else '',
        'description': '',
        'keywords': ''
    },
    'navigation': [],
    'sections': [],
    'footer': {},
    'styles': [],
    'scripts': []
}

# Meta tags
for meta in soup.find_all('meta'):
    name = meta.get('name', meta.get('property', ''))
    content = meta.get('content', '')
    if 'description' in name.lower():
        site_data['meta']['description'] = content
    elif 'keyword' in name.lower():
        site_data['meta']['keywords'] = content

# Navigation (adjust selector to match site structure)
nav = soup.find('nav') or soup.find(class_='menu') or soup.find(id='menu')
if nav:
    for link in nav.find_all('a'):
        site_data['navigation'].append({
            'text': link.get_text(strip=True),
            'href': link.get('href', '')
        })

# Main content sections
for section in soup.find_all(['section', 'div'], class_=True):
    site_data['sections'].append({
        'class': ' '.join(section.get('class', [])),
        'html': str(section),
        'text': section.get_text(separator='\n', strip=True)
    })

# Save cleaned HTML
Path("hgaegitim_2019/clean.html").write_text(str(soup), encoding='utf-8')

# Save extracted data
Path("hgaegitim_2019/site_data.json").write_text(
    json.dumps(site_data, indent=2, ensure_ascii=False), 
    encoding='utf-8'
)

print("Done! Check hgaegitim_2019/ folder")
print(f"- original.html: Raw archived page")
print(f"- clean.html: Cleaned HTML")
print(f"- site_data.json: Structured data for rebuilding")
