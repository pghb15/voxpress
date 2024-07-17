import { User } from "../../user/models/user";

export class Voicemail {
  contactId: string
  date: string
  phone: string
  language: string
  name: any
  option: string
  status: string
  type: string
  recordingUrl: string
  transcription: string
  commentary: string
  user: any

  constructor() {
    this.contactId = '';
    this.date = '';
    this.phone = '';
    this.language = '';
    this.name = '';
    this.option = '';
    this.status = '';
    this.type = '';
    this.recordingUrl = '';
    this.transcription = '';
    this.commentary = '';
    this.user = new User();
  }
}
