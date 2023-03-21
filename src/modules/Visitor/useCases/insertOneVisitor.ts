import { dataSource } from '../../../dataSource';
import { hasher } from '../../../lib/crypto';
import { Visitor } from '../entity';

export { insertOneVisitor };

async function insertOneVisitor(ipAddress: string) {
    const visitorRepository = dataSource.getRepository(Visitor);

    const hashedIpAddress = hasher.hash(ipAddress);

    const visitor = await visitorRepository.findOne({ where: { hashedIpAddress } });

    if (!visitor) {
        return visitorRepository.insert({ hashedIpAddress });
    }
}
