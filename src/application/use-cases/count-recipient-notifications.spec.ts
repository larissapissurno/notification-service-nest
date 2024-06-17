import { InMemoryNotificationsRepository } from '../../../test/in-memory-notifications-repository';
import { Notification } from '../entities/notification';
import { NotificationContent } from '../entities/notification-content';
import { CountRecipientNotification } from './count-recipient-notifications';

describe('CountRecipientNotifications', () => {
  it('should be able to count recipient notifications', async () => {
    // Arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotification(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'rec_1',
        content: new NotificationContent('any_content'),
        category: 'any_category',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'rec_1',
        content: new NotificationContent('any_content'),
        category: 'any_category',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        recipientId: 'rec_2',
        content: new NotificationContent('any_content'),
        category: 'any_category',
      }),
    );

    // Act
    const response = await countRecipientNotifications.execute({
      recipientId: 'rec_1',
    });

    // Assert
    expect(response).toEqual({ count: 2 });
  });
});
