# GeekVentures

A simplified futuristic agency portfolio with a cyan/violet palette, glass panels, and a Three.js hero, built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000. To verify a production build, run `npm run build`; serve it with `npm start`.

## Edit the portfolio

- `src/data/site.ts`: company details, services, project links, and social links.
- `src/components/`: navigation, hero, work grid, services, process, contact, and footer.
- `src/app/globals.css`: design tokens, layout, responsive styling, and reduced-motion rules.
- `src/app/layout.tsx`: page metadata and font.
- `public/images/projects/`: local screenshots of portfolio websites.

The work gallery includes Escentury and the five existing projects. Umrah & Beyond uses a typographic cover because its domain could not be reached when collecting previews. Set its `image` field to a local image path when a screenshot is available. Other previews fall back to a cover if an image fails to load.

Contact links open email, WhatsApp, or the phone dialer. Optional build-time overrides are `NEXT_PUBLIC_COMPANY_EMAIL`, `NEXT_PUBLIC_COMPANY_PHONE`, and `NEXT_PUBLIC_COMPANY_WHATSAPP`.

The existing `/api/contact` email endpoint is retained but is not used by the contact links. It requires `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` in `.env.local` if connected to a future form.

## Checks

```bash
npx tsc --noEmit
npm run build
```

Desktop and mobile review screenshots are saved in `artifacts/`.
