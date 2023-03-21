# Lootbox Simulator

## Motivation

It's for those people who miss opening lootboxes in the original 'Overwatch'.  
Other than that, I just fancied making another simple React app, because making things is fun.

## Features

- Annoying sound effects.
- Terrible drop-rates for legendary skins ('hack' the <code>lootItems</code> object if you want better ones).
- Light and dark mode depending on system settings.
- You get to click a button, which is always nice.

## Technology

React  
Vite

## Testing

Vitest  
Cypress

## Installation and Setup Instructions

Clone down this repository. You will need `node` installed globally on your machine.

#### Installation:

`npm install`

#### To Start Server:

`npm run dev`

#### Visit App:

`localhost:5173`

#### Run Test Suites:

**Vitest**  
`npm test`

**Cypress**  
`npx cypress open`

## Learnings

- How to use a simple sound effect.
- Getting Jest set up was an awful pain so I took the opportunity to give Vitest a go for the first time. It's so similar so it was pretty easy to jump into.
- More fun with conditional rendering. Seems obvious now but it hadn't occurred to me you could simply add more CSS classes by using <code>+</code>, such as in the line <code>"box-count " + (numberOfBoxes > 4 ? "everything-is-fine" : "warning")</code>.

## TODO

- Mobile issues with expanding lootbox.
- More tests.
- More annoying sounds and fx.
- Deployment.
