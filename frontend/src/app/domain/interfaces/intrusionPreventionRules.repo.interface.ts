import { IntrusionPreventionRules } from '../entities/intrusionPreventionRules';

export interface IIntrusionPreventionRulesRepo {
  getByPage(page: number): Promise<IntrusionPreventionRules[]>;
}
