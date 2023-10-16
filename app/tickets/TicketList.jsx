import React from 'react'

async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 30 // refaire le fetch dans 30 secondes parce que par defaut next ne le fait pas
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
          <h3>{ticket.title}</h3>
          <p>{ticket.body.slice(0, 100)}...</p>
          <div className={`pill ${ticket.priority}`}>
            { ticket.priority } priority
          </div>
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