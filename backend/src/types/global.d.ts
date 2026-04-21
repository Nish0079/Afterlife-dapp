interface AfterLifeMessage {
  id: number;
  owner: string;
  beneficiary: string;
  message: string;
  unlockDate: string;
  status: 'locked' | 'released';
  createdAt: string;
}

interface CreateAfterLifeMessageInput {
  owner: string;
  beneficiary: string;
  message: string;
  unlockDate: string;
}
