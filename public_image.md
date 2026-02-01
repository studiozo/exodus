# How to Add Images to the Website

This guide explains how to add new photos to the website so they appear in the correct sections.

## 1. Directory Structure

All images are stored in the `public/images/` folder. For the **Selected Works** page, they are organized into category subfolders:

- `public/images/blackwork/`
- `public/images/ornamental/`
- `public/images/nordic/`
- `public/images/asiatic blackwork/`
- `public/images/concepts/`

## 2. Naming Convention

- Use lowercase letters and numbers.
- Avoid spaces in filenames if possible (use `_` or `-` instead).
- Use `.webp` or `.jpg` formats for the best performance.

## 3. Adding to Selected Works

To add a new piece to the portfolio:
1. Upload the image to the corresponding category folder (e.g., `public/images/blackwork/`).
2. Open `components/Portfolio.tsx`.
3. Locate the `portfolioItems` array.
4. Add a new entry following this format:
   ```tsx
   { id: 13, category: 'BLACKWORK', title: 'My New Piece', label: 'Short Description', img: '/images/blackwork/my_image.webp' },
   ```

## 4. Updating Headshots

- The primary headshot used on the Home and About pages is: `/images/pierre_artist_headshot.webp`.
- To swap it globally, simply replace this file with a new one named exactly the same.
