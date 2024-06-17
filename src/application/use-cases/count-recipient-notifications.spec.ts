import { makeNotification } from '../../../test/factories/notification-factory';
import { CountRecipientNotification } from './count-recipient-notifications';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';

describe('CountRecipientNotifications', () => {
  it('should be able to count recipient notifications', async () => {
    // Arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotification(
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
    const response = await countRecipientNotifications.execute({
      recipientId: 'rec_1',
    });

    // Assert
    expect(response).toEqual({ count: 2 });
  });
});
