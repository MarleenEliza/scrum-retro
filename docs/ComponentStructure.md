# Component Structure

These components do NOT include auth / routing related components. This document serves as an overview for the UI components.

## Atoms

### CategoryHeading

Heading column of a single category
**props**

```bash
    Children: ReactComponent
```

### TheButton

**props**

```bash
    ariaLabel: string
    type?: HTMLButtonElement["type"]
    clickFunction: Function
    variant: 'cancel' | 'confirm' | 'default'
```

### VoteSymbol

Symbol for showcasing a single vote on a retro ticket.

- Empty when there is no vote
- Colored when the vote is by the user
  **props**

```bash
    variant: 'default' | 'empty' | 'primary'
```

### RetroTicketInput

Input component when creating a ticket.

**props**

```bash
   N/A
```

## Molecules

### RetroTicket

Single ticket for a retro scrum insight. User can click to add or remove vote.

**props**

```bash
    title: string
    numberOfVotes: number
    onVote: function
    onRemove: function
```

### RetroTicketForm

Form in which user can create a new ticket for a specific category.

- User can either cancel or add a new ticket
- Uses `RetroTicketInput.tsx` as child.
- Validates that the input is at least 3 symbols long.
- **props**

```bash
    onCancel: Function
    onConfrim: Function
```

## Organisms

### RetroCategory

List with multiple retro tickets.

- features a "add ticket" button to add ticket to the category

**props**

```bash
    title: string
    tickets: RetroTicket[]
```

### ScrumBoard

Board that encapulates 1 retro scrum session.

**props**

```bash
    content: RetroCategory[]
```
