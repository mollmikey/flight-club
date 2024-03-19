import db from './connection.ts'

export async function getMyTickets(passengerId: number) {
  return await db('tickets').select().where('passenger_id', passengerId)
}

export async function getMyTicketsByDob(dob: string) {
  return await db('passengers')
    .join('tickets', 'passengers.id', 'tickets.passenger_id')
    .select()
    .where('dob', dob)
}

export async function countMyTicketsByDob(dob: string) {
  return await db('passengers')
    .join('tickets', 'passengers.id', 'tickets.passenger_id')
    .where('dob', dob)
    .count('* as count')
    .first()
}
export async function countMyLostLuggage(dob: string) {
  return await db('tickets')
    .join('luggage', 'tickets.id', 'luggage.ticket_id')
    .join('passengers', 'passengers.id', 'tickets.passenger_id')
    .where('dob', dob)
    .andWhere('is_lost', true)
    .count('* as count')
    .first()
}
export async function sumMyLostLuggageWeight(dob: string) {
  return await db('tickets')
    .join('luggage', 'tickets.id', 'luggage.ticket_id')
    .join('passengers', 'passengers.id', 'tickets.passenger_id')
    .where('dob', dob)
    .andWhere('is_lost', true)
    .sum('weight as sum')
    .first()
}

export async function getMyLostLuggageLocation(dob: string) {
  return await db('tickets')
    .join('luggage', 'tickets.id', 'luggage.ticket_id')
    .join('passengers', 'passengers.id', 'tickets.passenger_id')
    .join('airports', 'airports.id', 'luggage.located_airport_id')
    .where('dob', dob)
    .andWhere('is_lost', true)
    .first()
}
