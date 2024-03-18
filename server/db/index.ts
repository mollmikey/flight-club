import db from './connection.ts'

export async function getMyTickets(passengerId: number) {
  return await db('tickets').select().where('passenger_id', passengerId)
}

export async function getMyTicketsByDob(dob: string) {}

export async function countMyTicketsByDob(dob: string) {}

export async function countMyLostLuggage(dob: string) {}

export async function sumMyLostLuggageWeight(dob: string) {}

export async function getMyLostLuggageLocation(dob: string) {}
