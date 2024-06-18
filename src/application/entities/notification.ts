/**
 * an entity does not have to be a table on DB,
 * sometimes it can be a simple class that represents a concept
 * sometimes an entity can be mapped to more than one table on DB
 */

import { Replace } from 'src/helpers/Replace';
import { NotificationContent } from './notification-content';
import { randomUUID } from 'node:crypto';

export interface INotificationProps {
  recipientId: string;
  content: NotificationContent;
  category: string;
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: INotificationProps;

  constructor(
    props: Replace<INotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt || new Date(),
      canceledAt: props.canceledAt || null,
    };
  }

  public get id(): string {
    return this._id;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public set content(content: NotificationContent) {
    this.props.content = content;
  }

  public get content(): NotificationContent {
    return this.props.content;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public markAsRead(): void {
    this.props.readAt = new Date();
  }

  public markAsUnread(): void {
    this.props.readAt = null;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public cancel(): void {
    this.props.canceledAt = new Date();
  }
}
