import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

export default {
  async create() {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    });

    await orphanagesRepository.save(orphanage);

    /* status 201 indica que algo foi criado com sucesso */
    return response.status(201).json(orphanage);
  }
}