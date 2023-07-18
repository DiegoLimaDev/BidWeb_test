export class IntrusionPreventionRules {
  name: string;
  description: string;
  applicationTypeID: number;
  priority: string;
  ruleAvailability: string;
  severity: string;
  detectOnly: boolean;
  eventLoggingDisabled: boolean;
  generateEventOnPacketDrop: boolean;
  alwaysIncludePacketData: boolean;
  debugModeEnabled: boolean;
  type: string;
  originalIssue: number;
  lastUpdated: number;
  identifier: string;
  alertEnabled: boolean;
  recommendationsMode: string;
  canBeAssignedAlone: boolean;
  ID: number;
  CVSSScore: string;
  CVE: [string];

  constructor(opts: IntrusionPreventionRules) {
    this.name = opts.name;
    this.description = opts.description;
    this.applicationTypeID = opts.applicationTypeID;
    this.priority = opts.priority;
    this.ruleAvailability = opts.ruleAvailability;
    this.severity = opts.severity;
    this.detectOnly = opts.detectOnly;
    this.eventLoggingDisabled = opts.eventLoggingDisabled;
    this.generateEventOnPacketDrop = opts.generateEventOnPacketDrop;
    this.alwaysIncludePacketData = opts.alwaysIncludePacketData;
    this.debugModeEnabled = opts.debugModeEnabled;
    this.type = opts.type;
    this.originalIssue = opts.originalIssue;
    this.lastUpdated = opts.lastUpdated;
    this.identifier = opts.identifier;
    this.alertEnabled = opts.alertEnabled;
    this.recommendationsMode = opts.recommendationsMode;
    this.canBeAssignedAlone = opts.canBeAssignedAlone;
    this.ID = opts.ID;
    this.CVSSScore = opts.CVSSScore;
    this.CVE = opts.CVE;
  }
}
