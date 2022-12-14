/* eslint-disable prettier/prettier */
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notifications-repository';

export interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

export interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) { }

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;
    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return {
      notification,
    };
  }
}
