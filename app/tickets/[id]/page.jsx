import { notFound } from "next/navigation"

export const dynamicParams = false

export async function generateStaticParams() {

  const res = await fetch(`http://localhost:4000/tickets/`)

  const tickets = await res.json()

  return tickets.map((ticket) => ({
    id: ticket.id
  }))
}

async function getTickets(id) {

  // imitate a delay for database
  await new Promise((r) => setTimeout(r, 2000))

  const res = await fetch(`http://localhost:4000/tickets/${id}`,  {
    next: {
      revalidate: 60
    }
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

const TicketDetails = async ({params}) => {

  const id = params.id
  const ticket = await getTickets(id)

  console.log('ticket aaaaa id', ticket.id)

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>

      <div className='card'>
        <h3>{ticket.title} </h3>
        <small>Created by { ticket.user_email  } </small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          { ticket.priority } priority
        </div>
      </div>
    
    </main>
  )
}

export default TicketDetails