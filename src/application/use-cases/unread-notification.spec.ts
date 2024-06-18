import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { Notification } from '../entities/notification';
import { NotificationContent } from '../entities/notification-content';
import { UnreadNotification } from './unread-notification';

describe('ReadNotification', () => {
  it('should be able to unread a notification', async () => {
    // Arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = new Notification({
      recipientId: 'any_id',
      content: new NotificationContent('any_content'),
      category: 'any_category',
      readAt: new Date(),
    });

    await notificationsRepository.create(notification);

    // Act
    await unreadNotification.execute({
      notificationId: notification.id,
    });

    // Assert
    expect(notificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non-existing notification', async () => {
    // Arrange
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new UnreadNotification(notificationsRepository);

    // Act
    const promise = readNotification.execute({
      notificationId: 'non_existing_id',
    });

    // Assert
    await expect(promise).rejects.toThrow('Notification not found');
  });
});
