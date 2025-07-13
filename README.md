# Mİni CRM

## Project Structure
```
src/
├── components/
│   ├── AddUserModal/
│   │   └── AddUserModal.tsx            # Modal form to add new users
│   ├── Layout/
│   │   └── Layout.tsx                  # Layout for project
│   ├── Loading/
│   │   └── Loading.tsx                 # Loading component with responsive design
│   ├── NotFoundMessage/
│   │   └── NotFoundMessage.tsx         # NotFoundMessage component with responsive design
│   ├── Pagination/
│   │   └── Pagination.tsx              # Pagination component with responsive design
│   ├── UI/
│   │   └── Button.tsx                  # Reusable styled button
├── hooks/
│   ├── useUserContext.ts               # Context and reducer for user state management
│   └── useDeviceBreakpoints.ts         # Hook for device size detection
├── pages/
│   ├── user/
│   │   ├── List/
│   │   │   ├── UserList.tsx            # User list page with search, pagination & view toggle
│   │   │   ├── UserListTable.tsx       # Table view with virtualized list
│   │   │   ├── UserCardList.tsx        # Card view with virtualized grid
│   │   │   └── UserCard/
│   │   │       └── UserCard.tsx        # Individual user card
│   │   └── Detail/
│   │       └── UserDetail.tsx          # User detail page with Leaflet map
├── context/
│   ├── UserContext.ts                  # Creates and exports React Context
│   └── UserProvider.ts                 # Context provider component
├── reducer/
│   └── UserReducer.ts                  # Reducer function handling state updates
├── utils/
│   ├── generateFakeUsers.ts            # Generates fake users with faker.js
│   └── getRandomCoordinateInTurkey.ts  # Generates random coordinates in Turkey for users
├── types/
│   └── user.ts                         # User type definitions
├── App.tsx
├── index.tsx
public/
.gitignore
package.json
tsconfig.json
README.md

```
----
## Features
- User List with Table and Card views
- Search & filtering synced with URL parameters
- Toggle between paginated and all items mode with virtualization for performance
- Add User Modal with form validation and persistence in localStorage
- User Detail page showing user info and location on a Leaflet map
- Responsive design with mobile-friendly UI and adaptive pagination controls
- State managed with React Context API
- Styling done with styled-components
---

## Setup & Running the Project

```bash
git clone https://github.com/didemkome/mini-crm.git
cd mini-crm

pnpm install
pnpm dev
```