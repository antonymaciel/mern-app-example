import { JsonController, Get, Patch } from 'routing-controllers'
import { FlightsService } from '../services/flights.service'

const flightsService = new FlightsService();

@JsonController('/flights', { transformResponse: false })
export default class FlightsController {
    @Get('')
    async getAll() {
        return {
            status: 200,
            data: await flightsService.getAll(),
        }
    }

    @Patch('/:code')
    async patch() {
      return {
          status: 200,
          data: (await flightsService.getAll())[0],
      }
  }
}
