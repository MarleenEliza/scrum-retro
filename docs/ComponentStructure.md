# Component Structure

## Atoms

### CategoryHeader

Header column of a single category
**props**

```bash
    Children: ReactComponent
```

### VoteSymbol

Symbol for showcasing a single vote on a retro ticket
**props**

```bash
    N/A
```

### AddButton

Button for creating a ticket
**props**

```bash
    N/A
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

## Organisms

### RetroCategory

List with multiple retro tickets
**props**

```bash
    title: string
    tickets: RetroTicket[]
```

### ScrumBoard

Board that encapulates 1 retro scrum session

**props**

```bash
    categories: RetroTicketList[]
```
