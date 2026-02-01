# Pierre's Site Notes: Edits & Tweaks

Use this guide to make quick updates to the text and content of your website.

## 1. Updating Text Content

Most of the text is located within the components folder. Here is where to look for specific sections:

- **Home Page**: `components/Home.tsx` (Teasers and general intros)
- **Biography**: `components/About.tsx` (Origins, Journey, and Philosophy sections)
- **Styles**: `components/Inspo.tsx` (Definitions for Blackwork, Dotwork, etc.)
- **Testimonials**: `components/Testimonials.tsx` (Client stories and quotes)
- **Villa/Private Sessions**: `components/Villa.tsx` (Sanctuary details)

### How to edit:
1. Open the file in your code editor.
2. Search for the text you want to change (e.g., "From Caracas to Bali").
3. Update the text within the quotation marks or HTML tags.
4. Save the file.

## 2. Home Page Gallery Slider

The horizontal slider on the Home page is controlled in `components/Home.tsx`.
- Find the `{/* Horizontal Slide Gallery Preview */}` comment.
- You can add or swap images there by changing the `src` attribute.

## 3. Changing Portfolio Categories

If you want to rename or add a category:
1. Open `components/Portfolio.tsx`.
2. Find the `categories` array at the top:
   ```tsx
   const categories = ['ALL', 'BLACKWORK', 'ORNAMENTAL', 'NORDIC', 'ASIATIC BLACKWORK', 'CONCEPTS'];
   ```
3. Update the names here. Note: Make sure the `category` in your `portfolioItems` list matches exactly!

## 3. Testimonials

To add a new testimonial:
1. Open `components/Testimonials.tsx`.
2. Look for the "Placeholder" cards.
3. Replace the placeholder text with your real client quote and name.

## 4. Deployment

Since the site is hosted on **GitHub** and deployed via **Firebase**:
1. Commit and push your changes to GitHub.
2. The site should automatically deploy (or run `firebase deploy` if configured manually).
