import Link from 'next/link'
import React from 'react'

async function getTickets() {

  // imitate a delay for database
  await new Promise((r) => setTimeout(r, 2000))


  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 2 // revalidate every 0 seconds (pas mettre en cache)
    }
  })

  return res.json()
}    
const TicketList = async () => {

  const tickets = await getTickets()

  return (
    <>
      { tickets.map((ticket) => (
        <div key={ticket.id} className='card my-5'>
        
          <Link href={`/tickets/${ticket.id}`}>

            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 100)}...</p>
            <div className={`pill ${ticket.priority}`}>
              { ticket.priority } priority
            </div>

          </Link>

        </div>
      ))}

      {tickets.length === 0 && (
        <p className='text-center'>
          There are no open tickets, ooooooh yaaaay!
        </p>
      )}
    </>
  )
}

export default TicketList