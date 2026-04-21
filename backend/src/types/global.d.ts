interface AfterLifeMessage {
  id: number;
  owner: string;
  beneficiary: string;
  message: string;
  unlockDate: string;
  status: 'locked' | 'released';
  createdAt: Date;
}

interface CreateAfterLifeMessageInput {
  owner: string;
  beneficiary: string;
  message: string;
  unlockDate: string;
}
