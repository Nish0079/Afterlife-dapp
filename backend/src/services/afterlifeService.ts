const messages: AfterLifeMessage[] = [];

export const createMessage = (
  input: CreateAfterLifeMessageInput,
): AfterLifeMessage => {
  const newMessage: AfterLifeMessage = {
    id: Date.now(),
    owner: input.owner,
    beneficiary: input.beneficiary,
    message: input.message,
    unlockDate: input.unlockDate,
    status: new Date(input.unlockDate) <= new Date() ? 'released' : 'locked',
    createdAt: new Date().toISOString(),
  };

  messages.push(newMessage);
  return newMessage;
};

export const getMessages = (): AfterLifeMessage[] => messages;

export const getMessageById = (id: number): AfterLifeMessage | undefined =>
  messages.find((message) => message.id === id);
