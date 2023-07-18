import axios from 'axios';
import { IntrusionPreventionRules } from '../domain/entities/intrusionPreventionRules';
import { IIntrusionPreventionRulesRepo } from '../domain/interfaces/intrusionPreventionRules.repo.interface';

export class IntrusionPreventionRulesRepoImpl
  implements IIntrusionPreventionRulesRepo
{
  async getByPage(page: number): Promise<IntrusionPreventionRules[]> {
    const url = `http://127.0.0.1:5000/page/${page}`;
    const data = await axios.get(url).then((res) => res.data);
    return data.map((IPS: IntrusionPreventionRules) => ({
      name: IPS.name,
      ID: IPS.ID,
      severity: IPS.severity,
      description: IPS.description,
    }));
  }
}
