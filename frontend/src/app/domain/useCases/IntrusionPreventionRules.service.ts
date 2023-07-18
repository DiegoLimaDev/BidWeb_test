import { IntrusionPreventionRules } from '../entities/intrusionPreventionRules';
import { IIntrusionPreventionRulesRepo } from '../interfaces/intrusionPreventionRules.repo.interface';

export class IntrusionPreventionRulesServiceImpl {
  IPSrepo: IIntrusionPreventionRulesRepo;
  constructor(IPSrepo: IIntrusionPreventionRulesRepo) {
    this.IPSrepo = IPSrepo;
  }

  async getByPage(page: number): Promise<IntrusionPreventionRules[]> {
    return await this.IPSrepo.getByPage(page);
  }
}
