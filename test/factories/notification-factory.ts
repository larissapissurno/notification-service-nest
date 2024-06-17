import {
  INotificationProps,
  Notification,
} from '@/application/entities/notification';
import { NotificationContent } from '@/application/entities/notification-content';

export function makeNotification(
  overrides: Partial<INotificationProps> = {},
): Notification {
  return new Notification({
    recipientId: 'rec_1',
    content: new NotificationContent('any_content'),
    category: 'any_category',
    ...overrides,
  });
}
