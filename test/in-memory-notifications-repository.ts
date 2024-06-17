import { NotificationsRepository } from '@/application/repositories/notifications-repository';
import { Notification } from '@/application/entities/notification';
import { NotificationNotFound } from '@/application/use-cases/errors/notification-not-found';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    return (
      this.notifications.find(
        (notification) => notification.id === notificationId,
      ) || null
    );
  }

  countManyByRecipientId(recipientId: string): Promise<number> {
    return Promise.resolve(
      this.notifications.filter(
        (notification) => notification.recipientId === recipientId,
      ).length,
    );
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (n) => n.id === notification.id,
    );

    if (notificationIndex === -1) throw new NotificationNotFound();

    this.notifications[notificationIndex] = notification;
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
