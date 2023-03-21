import { dataSource } from '../../../dataSource';
import { Visitor } from '../entity';

export { countVisitors };

async function countVisitors() {
    const visitorRepository = dataSource.getRepository(Visitor);

    const visitorsCount = await visitorRepository.count();

    return visitorsCount;
}
