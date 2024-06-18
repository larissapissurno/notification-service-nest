import { makeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('CountRecipientNotifications', () => {
  it('should be able to get recipient notifications', async () => {
    // Arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotifications = new GetRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'rec_1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'rec_1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'rec_2' }),
    );

    // Act
    const response = await getRecipientNotifications.execute({
      recipientId: 'rec_1',
    });

    // Assert
    expect(response.notifications).toHaveLength(2);
    expect(response.notifications).toEqual([
      expect.objectContaining({ recipientId: 'rec_1' }),
      expect.objectContaining({ recipientId: 'rec_1' }),
    ]);
  });
});
