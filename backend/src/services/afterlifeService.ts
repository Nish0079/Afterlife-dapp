const messages: AfterLifeMessage[] = [];

export const createMessage = (
  owner: string,
  beneficiary: string,
  message: string,
  unlockDate: string
) => {
  const now = new Date();
  const unlock = new Date(unlockDate);

  const status: 'locked' | 'released' = unlock > now ? 'locked' : 'released';

  const newMsg: AfterLifeMessage = {
    id: Date.now(),
    owner,
    beneficiary,
    message,
    unlockDate,
    status,
    createdAt: new Date(),
  };

  messages.push(newMsg);
  return newMsg;
};

export const getMessages = () => {
  const now = new Date();

  return messages.map((msg) => {
    const unlock = new Date(msg.unlockDate);

    if (unlock > now) {
      return {
        ...msg,
        message: '🔒 Message locked until unlock date',
        status: 'locked' as const,
      };
    }

    return {
      ...msg,
      status: 'released' as const,
    };
  });
};