# karolina apanasewicz || portfolio

A responsive English-language visual notebook for styling, creative direction and fashion design. Static HTML, CSS and JavaScript; no dependencies or build step.

## Development

Use the existing checkout; no worktree is required. From `/workspace/portfolio`, run:

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

## Demonstration imagery

`images/editorial-studies.png` is an original AI-generated contact sheet created for this visual preview. The six fictional fashion images are labelled as demonstrations on the page and in the image viewer. They are not Karolina's portfolio work. No Pinterest photographs are included. CSS displays individual cells without separate image downloads or third-party image services.

Before final publication of a real portfolio, replace the demonstration images, project titles, biography and contact placeholders with approved personal work, accurate descriptions and collaborator credits. Each article's `data-category` supports filtering. Each image button opens the keyboard-accessible image dialog; Escape closes it and returns focus.

## Publication

GitHub Pages serves the repository root on the `karolina_apanasewicz_portfolio` branch. Push updates to that branch. The custom domain field should remain empty when using the default GitHub Pages address. Publication and its status are managed by GitHub.
